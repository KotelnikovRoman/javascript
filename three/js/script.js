
var width = window.innerWidth;
var height = window.innerHeight;
var step = 0;
$(function() {
    function renderScene() {
        requestAnimationFrame(renderScene);
        renderer.render(scene, camera);
    }
    
    function initStats() {
        var stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        $('#Stats-output').append(stats.domElement);
        return stats;
    }
    var stats = initStats();
    
    function render() {
        stats.update();
        cube.rotation.x += 0.02;
        cube.rotation.y += 0.02;
        cube.rotation.z += 0.02;
        step += 0.04;   /*для работы должна быть глобальная переменная вне функции*/
        sphere.position.x = 20 + (10 * (Math.cos(step)));
        sphere.position.y = 2 + (10 * Math.abs(Math.sin(step)));
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xeeeeee, 1.0);   //setClearColorHex ne rabotaet?
    renderer.setSize(width, height);
    renderer.shadowMapEnabled = true;

    //добавляем оси
    var axes = new THREE.AxisHelper(20);
    scene.add(axes);

    //плоскость на которой отображаются предметы
    var planeGeometry = new THREE.PlaneGeometry(60,20,1,1);
    var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
    var plane = new THREE.Mesh(planeGeometry,planeMaterial);
    plane.receiveShadow = true;
    plane.rotation.x = -0.5*Math.PI;
    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;
    scene.add(plane);

    //добавление куба
    var cubeGeometry = new THREE.CubeGeometry(4,4,4);
    var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;
    cube.position.x = -4;
    cube.position.y = 3;
    cube.position.z = 0;
    scene.add(cube);

    //добавление сферы
    var sphereGeometry = new THREE.SphereGeometry(4,20,20);
    var sphereMaterial = new THREE.MeshPhongMaterial({color: 0x7777ff});
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.castShadow = true;
    sphere.position.x = 20;
    sphere.position.y = 4;
    sphere.position.z = 2;
    scene.add(sphere);

    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-40, 60, -10);
    spotLight.castShadow = true;
    scene.add(spotLight);

    //камера для отображения объектов
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);
    $('#WebGL-output').append(renderer.domElement);

    //отображает fps
    render();
    renderScene();
});