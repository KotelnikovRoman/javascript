//properties (свойства)
local_href = location.href;
local_host = location.host;
local_hostname = location.hostname;
local_path = location.pathname;
local_port = location.port;
local_protocol = location.protocol;
local_search = location.search;

function local_assign() {
	location.assign('http://www.vk.com');
}
