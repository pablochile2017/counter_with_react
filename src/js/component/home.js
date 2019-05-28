import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import "./style.css";
//create your first component
let counter = 0;
export class Home extends React.Component {
	render() {
		counter++;
		let str = counter.toString().padStart(6, "0");
		let arr = str.split("");
		console.log(arr);

		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-2" />
					<div className="col-md-1 m-1 border border-white text-center rounded bg-secondary text-white">
						<h1>
							<i className="far fa-clock" />
						</h1>
					</div>
					<div className="col-md-1 m-1  border border-white text-center rounded bg-secondary text-white">
						<h1>{arr[0]}</h1>
					</div>
					<div className="col-md-1 m-1  border border-white text-center rounded bg-secondary text-white">
						<h1>{arr[1]}</h1>
					</div>
					<div className="col-md-1 m-1  border border-white text-center rounded bg-secondary text-white">
						<h1>{arr[2]}</h1>
					</div>
					<div className="col-md-1 m-1  border border-white text-center rounded bg-secondary text-white">
						<h1>{arr[3]}</h1>
					</div>
					<div className="col-md-1 m-1  border border-white text-center rounded bg-secondary text-white">
						<h1>{arr[4]}</h1>
					</div>
					<div className="col-md-1 m-1  border border-white text-center rounded bg-secondary text-white">
						<h1>{arr[5]}</h1>
					</div>
					<div className="col-md-2" />
				</div>
			</div>
		);
	}
}
