module.exports = {
	footer: function(queryData_email) {
		return `

		<style type="text/css">
			#footer{
				background: white;

				display: flex;
				justify-content: center;
			}
		</style>

		<!--footer-->
		<div data-role="footer" data-position="fixed" id="footer">
			<table>
				<tr>
					<td> <a href="/matching?email=${queryData_email}">
							<img data-role="button" src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/%EB%A7%A4%EC%B9%AD.png" height="65px" width="65px"> 
						</a>
					</td>

					<td> <a href="/hero?email=${queryData_email}"> 
							<img data-role="button" src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/%EC%9A%A9%EB%B3%91.jpg" height="65px" width="65px"> 
						</a>
					</td>

					<td> <a  href="/team?email=${queryData_email}">
							<img data-role="button" src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/%ED%8C%80.png" height="65px" width="65px">
						</a>
					</td>

					<td> <a href="/chat?email=${queryData_email}">
							<img data-role="button" src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/%EC%B1%84%ED%8C%85.png" height="65px" width="65px"> 
						</a>
					</td>

					<td> <a href="/user?email=${queryData_email}"> 
							<img data-role="button" src="https://raw.githubusercontent.com/kimxminsu/kickkick/minsu/app/img/%EC%9C%A0%EC%A0%80.png" height="65px" width="65px"> 
						</a>
					</td>
				</tr>	
			</table>
		</div>		
		`;
	}
}