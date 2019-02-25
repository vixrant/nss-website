import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return(
			<div>
				<footer className="page-footer font-small cyan darken-3">
				    <div className="container">
				    	<center>
				    		<h3>FOLLOW US</h3>
					      	<div className="row">
					        	<div className="col-md-12 py-2">

							            <a href="https://www.facebook.com/djsce.nss" className="m-2 btn btn-default">
							              	<i className="fab fa-facebook-f fa-lg white-text m-2 fa-2x"> </i>
							            </a> 

							            <a className="m-2 btn btn-default">
							              	<i className="fab fa-twitter fa-lg white-text m-2 fa-2x"> </i>
							            </a>

							            <a href="https://www.instagram.com/nss_djsanghvi/" className="m-2 btn btn-default">
							              	<i className="fab fa-instagram fa-lg white-text m-2 fa-2x"> </i>
							            </a>
					        	</div>
					      	</div>
				      	</center>
				    </div>
				</footer>

				<style jsx>{`

					a {
	        			border: 1px solid white;
		      			border-radius: 30%;				     
	        		}

					footer {
						margin-top: 5vh;
						padding: 5vh;
						font-family: 'Century Gothic';
						color: white;
						background-color: #323232;
					}

	        	`}</style>

			</div>
		);
	}
}

export default Footer;