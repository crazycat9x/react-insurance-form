import React, { Component } from "react";
import "./App.css";
const icon = {
	noPartner: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 408 408">
			<g>
				<g id="person">
					<path
						d="M204,204c56.1,0,102-45.9,102-102S260.1,0,204,0c-56.1,0-102,45.9-102,102S147.9,204,204,204z M204,255
			C135.15,255,0,288.15,0,357v51h408v-51C408,288.15,272.85,255,204,255z"
					/>
				</g>
			</g>
		</svg>
	),
	partner: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 561 561">
			<g>
				<g id="people">
					<path
						d="M382.5,255c43.35,0,76.5-33.15,76.5-76.5S425.85,102,382.5,102S306,135.15,306,178.5S339.15,255,382.5,255z M178.5,255
			c43.35,0,76.5-33.15,76.5-76.5S221.85,102,178.5,102S102,135.15,102,178.5S135.15,255,178.5,255z M178.5,306
			C119.85,306,0,336.6,0,395.25V459h357v-63.75C357,336.6,237.15,306,178.5,306z M382.5,306c-7.65,0-15.3,0-25.5,2.55
			c30.6,20.4,51,51,51,86.7V459h153v-63.75C561,336.6,441.15,306,382.5,306z"
					/>
				</g>
			</g>
		</svg>
	),
	male: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 426.667 426.667">
			<g>
				<path
					d="M165.705,426.667C74.334,426.667,0,352.333,0,260.962c0-91.366,74.334-165.7,165.705-165.7
		c91.366,0,165.7,74.334,165.7,165.7C331.405,352.333,257.071,426.667,165.705,426.667z M165.705,157.235
		c-57.199,0-103.735,46.532-103.735,103.731s46.532,103.735,103.735,103.735c57.195,0,103.735-46.532,103.735-103.735
		C269.436,203.767,222.899,157.235,165.705,157.235z"
				/>
				<polygon points="426.667,165.705 364.698,165.705 364.698,61.969 260.962,61.969 260.962,0 426.667,0 	" />
				<rect
					x="297.325"
					y="3.092"
					transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 490.914 400.0457)"
					width="61.968"
					height="190.518"
				/>
			</g>
		</svg>
	),
	female: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 417.606 417.606">
			<g>
				<path
					d="M251.906,331.41c-91.379,0-165.709-74.338-165.709-165.705c0-91.371,74.334-165.705,165.709-165.705
		c91.366,0,165.7,74.334,165.7,165.705C417.606,257.072,343.272,331.41,251.906,331.41z M251.906,61.975
		c-57.203,0-103.735,46.532-103.735,103.735c0,57.195,46.532,103.735,103.735,103.735c57.199,0,103.735-46.537,103.735-103.735
		C355.637,108.507,309.105,61.975,251.906,61.975z"
				/>
				<rect
					x="58.314"
					y="233.078"
					transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -79.7284 623.65)"
					width="61.968"
					height="190.518"
				/>
				<rect
					x="-5.991"
					y="297.329"
					transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -79.764 623.5881)"
					width="190.518"
					height="61.968"
				/>
			</g>
		</svg>
	),
	smoke: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 426.667 426.667">
			<g>
				<g>
					<g>
						<path
							d="M299.307,206.827h-32.64v0.107c-21.76,0-39.467-20.907-39.467-42.667c0-21.76,17.707-37.333,39.467-37.333v-32
				c-39.36,0-71.467,32-71.467,71.467s32,71.467,71.467,71.467v-0.107h32.64c22.293,0,42.027,15.787,42.027,43.84v27.733h32V274.24
				C373.333,235.84,339.2,206.827,299.307,206.827z"
						/>
						<rect x="341.333" y="330.667" width="32" height="64" />
						<rect x="0" y="330.667" width="320" height="64" />
						<path
							d="M359.467,154.24c13.12-12.907,21.333-30.933,21.333-50.773C380.8,64,348.693,32,309.333,32v32
				c21.76,0,39.467,17.707,39.467,39.467c0,21.76-17.707,39.467-39.467,39.467v32c47.893,0,85.333,38.933,85.333,86.827v47.573h32
				v-47.68C426.667,214.187,399.36,173.227,359.467,154.24z"
						/>
						<rect x="394.667" y="330.667" width="32" height="64" />
					</g>
				</g>
			</g>
		</svg>
	),
	noSmoke: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 448 448">
			<g>
				<g>
					<g>
						<rect x="352" y="234.667" width="32" height="64" />
						<path
							d="M277.333,142.827h32.64c22.293,0,42.027,15.787,42.027,43.84v26.667h32v-33.92C384,140.907,349.867,112,309.973,112
				h-32.64c-21.76,0-39.467-20.907-39.467-42.667S255.573,32,277.333,32V0c-39.36,0-71.467,32-71.467,71.467
				C205.867,110.933,237.973,142.827,277.333,142.827z"
						/>
						<polygon points="330.667,297.067 330.667,234.667 268.267,234.667 			" />
						<rect x="405.333" y="234.667" width="32" height="64" />
						<path
							d="M370.133,61.44c13.12-12.907,21.333-30.933,21.333-50.773h-32c0,21.76-17.707,39.467-39.467,39.467v32
				c47.893,0,85.333,38.933,85.333,86.827v44.373h32v-44.48C437.333,121.387,410.027,80.427,370.133,61.44z"
						/>
						<polygon
							points="10.667,85.333 159.893,234.667 10.667,234.667 10.667,298.667 223.893,298.667 373.12,448 400,421.333 
				37.333,58.667 			"
						/>
					</g>
				</g>
			</g>
		</svg>
	)
};
function validate(e) {
	var theEvent = e || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode(key);
	var regex = /[0-9]|\./;
	if (!regex.test(key)) {
		theEvent.returnValue = false;
		if (theEvent.preventDefault) theEvent.preventDefault();
	}
}
function Tabs(props) {
	return (
		<ul className="tabs">
			{props.tabs.map((tab, index) => (
				<li
					key={tab.toString()}
					value={index}
					className={index === props.activeTab ? "active" : ""}
					onClick={(e, cond) => props.setValue(e, tab)}>
					{tab[0]}
				</li>
			))}
		</ul>
	);
}
function Slider(props) {
	return (
		<div>
			<legend className="desc">{props.desc}</legend>
			<div className="input-group">
				<div className="input-group-prepend">
					<span className="input-group-text">$</span>
				</div>
				<input
					className="form-control currency inputField"
					type="number"
					pattern="\d*"
					name={props.type}
					onKeyPress={validate}
					value={props.value}
					min="0"
					max={props.max}
					step={props.step}
					onChange={(e, cond) => props.setValue(e, "float")}
				/>
			</div>
			<div className="slideContainer">
				<input
					className="slider"
					type="range"
					name={props.type}
					min={props.min}
					max={props.max}
					value={props.value}
					step={props.step}
					onChange={(e, cond) => props.setValue(e, "float")}
				/>
			</div>
		</div>
	);
}
function RadioButton(props) {
	return (
		<fieldset className="radio-tile-group">
			<legend className="desc">{props.desc}</legend>
			<div className="optionGroup">
				<input type="hidden" value="" />
				{props.data.map(data => (
					<div key={data[1].toString()} className="input-container">
						<input
							className="radio-button"
							name={props.type}
							type="radio"
							value={data[1]}
							checked={props.check === data[1]}
							onChange={props.setValue}
						/>
						<div className="radio-tile">
							<div className="icon">{icon[data[2]]}</div>
							<label className="radio-tile-label">
								{data[0]}
							</label>
						</div>
					</div>
				))}
			</div>
		</fieldset>
	);
}
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: 0,
			age: 0,
			smoke: "",
			sex: "",
			cover: 0,
			partner: "false",
			partnerSmoke: "",
			partnerAge: 0,
			partnerSex: "",
			partnerSmoke: "",
			partnerCover: 0
		};
	}
	handleValueChange(event, cond) {
		const target = event.target;
		var value = target.type === "checkbox" ? target.checked : target.value;
		var name = target.name;
		if (cond == "num") {
			value = parseInt(value);
		} else if (cond == "float") {
			value = parseFloat(value);
		} else if (Array.isArray(cond)) {
			name = "activeTab";
			document.documentElement.style.setProperty("--main-color", cond[1]);
		}
		console.log(typeof value);
		this.setState({ [name]: value });
	}
	render() {
		return (
			<div>
				<Tabs
					tabs={[
						["Insurance", "#2196F3"],
						["Life insurance", "#F44336"],
						["Mortgage", "#4CAF50"]
					]}
					activeTab={this.state.activeTab}
					setValue={this.handleValueChange.bind(this)}
				/>
				<div className="row mainCard justify-content-center">
					<div className="col-12 col-sm-12 col-md-4 align-self-end">
						<RadioButton
							desc="Do you have a partner?"
							type="partner"
							check={this.state.partner}
							data={[
								["Yes", "true", "partner"],
								["No", "false", "noPartner"]
							]}
							setValue={this.handleValueChange.bind(this)}
						/>
						<legend className="desc">Age</legend>
						<input
							className="inputField"
							name="age"
							type="number"
							pattern="\d*"
							onKeyPress={validate}
							value={this.state.age}
							min="0"
							onChange={(e, cond) =>
								this.handleValueChange(e, "num")
							}
						/>
						<RadioButton
							desc="Are you a smoker?"
							type="smoke"
							check={this.state.smoke}
							data={[
								["Yes", "true", "smoke"],
								["No", "false", "noSmoke"]
							]}
							setValue={this.handleValueChange.bind(this)}
						/>
						<RadioButton
							desc="Your gender"
							type="gender"
							check={this.state.gender}
							data={[
								["Male", "male", "male"],
								["Female", "female", "female"]
							]}
							setValue={this.handleValueChange.bind(this)}
						/>
						<Slider
							desc="Your cover amount"
							type="cover"
							min={200000}
							max={1000000}
							step={10000}
							value={this.state.cover}
							setValue={this.handleValueChange.bind(this)}
						/>
					</div>
					<div className="col-12 col-sm-12 col-md-4 align-self-end">
						{this.state.partner == "true" && (
							<div>
								<legend className="desc">
									Your partner age
								</legend>
								<input
									className="inputField"
									name="partnerAge"
									type="number"
									pattern="\d*"
									onKeyPress={validate}
									value={this.state.partnerAge}
									min="0"
									onChange={(e, cond) =>
										this.handleValueChange(e, "num")
									}
								/>
							</div>
						)}
						{this.state.partner == "true" && (
							<RadioButton
								desc="Is your partner a smoker?"
								type="partnerSmoke"
								check={this.state.partnerSmoke}
								data={[
									["Yes", "true", "smoke"],
									["No", "false", "noSmoke"]
								]}
								setValue={this.handleValueChange.bind(this)}
							/>
						)}
						{this.state.partner == "true" && (
							<RadioButton
								desc="Your partner gender"
								type="partnerGender"
								check={this.state.partnerGender}
								data={[
									["Male", "male", "male"],
									["Female", "female", "female"]
								]}
								setValue={this.handleValueChange.bind(this)}
							/>
						)}
						{this.state.partner == "true" && (
							<Slider
								desc="Your partner cover amount"
								type="partnerCover"
								min={200000}
								max={1000000}
								step={10000}
								value={this.state.partnerCover}
								setValue={this.handleValueChange.bind(this)}
							/>
						)}
					</div>
					<div className="col-12 col-sm-12 col-md-4">
						<div className="result">
							<div className="resultHead">
								<div>
									<h1>Our offer</h1>
								</div>
							</div>
							<h2
								style={{
									fontSize:
										((this.state.cover +
											this.state.partnerCover) /
											2000000) *
											10 +
										20
								}}
								className="currency">
								{(
									this.state.cover + this.state.partnerCover
								).toLocaleString("en", {
									style: "currency",
									currency: "NZD"
								})}
							</h2>
							<div className="buttons">
								<div className="btn-wrapper">
									<button className="btn blue">
										Contact us
									</button>
								</div>
								<div className="divider" />
								<div className="btn-wrapper">
									<button className="btn blue">
										Get your insurance
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default App;
