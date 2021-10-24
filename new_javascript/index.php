<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		.result {
			font-weight: bold;
		}
		#payment {
			text-decoration: underline;
		}
	</style>
</head>
<body>
	<form action="" name="loandata">
		<table>
			<tr>
				<td>
					<b>введите данные о ссуде</b>
				</td>
				<td>
					размер ссуды
				</td>
				<td>
					<input type="text" name="principal" onchange="calculate();">
				</td>
			</tr>
			<tr>
				<td>Годовой процент</td>
				<td>
					<input type="text" name="interest" onchange="calculate()">
				</td>
			</tr>
			<tr>
				<td></td>
				<td>
					<input type="button" value="расчитать" onclick="calculate()">
				</td>
			</tr>
			<tr>
				<td>
					<b>Сведения о платежах</b>
				</td>
			</tr>
			<tr>
				<td>ежемесячный платёж</td>
				<td>
					<span class="result" id="payment"></span>
				</td>
			</tr>
			<tr>
				<td>Общая сумма платежей</td>
				<td>
					<span class="result" id="total"></span>
				</td>
			</tr>
			<tr>
				<td>Общая сумма плотяжей по проценту</td>
				<td>
					<span class="result" id="totalinterest"></span>
				</td>
			</tr>
		</table>
	</form>
	<button onclick="alert('hello, you click me');">click me</button>
	<br>
	<script>
		fact = 1;
		for(var i = 1; i < 10; i++) {
			fact *= i;
			document.write(i + ' = ' + fact + '<br>');
		}

		function calculate() {
			var principal = document.loandata.principal.value;
			var interest = document.loandata.interest.value / 100 / 12;
			var payments = document.loandata.years.value * 12;

			var x = Math.pow(1 + interest, payments);
			var monthly = (principal*x*interest) / (x-1);

			var payment = document.getElementById("payment");
			var total = document.getElementById("total");
			var totalinterest = document.getElementById("totalinterest");
			if(isFinite(monthly)) {
				payment.innerHTML = monthly.toFixed(2);
				total.innerHTML = (monthly * payments).toFixed(2);
				totalinterest.innerHTML = ((monthly * payments) - principal).toFixed(2);
			}
			else{
				payment.innerHTML = "";
				total.innerHTML = "";
				totalinterest.innerHTML = "";
			}
		}
	</script>
</body>
</html>