/*  College Compendium Component File
Copyright (C) 2021 Seth Goldin & Samuel Crombie
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version. 
You may not use your own version of this program commerically.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.
You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
You can contact us for more details at team@collegecompendium.org. */

import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const TempSplashPage = () => {
	const [email, setEmail] = useState("");

	return (
		<section className="px-4 py-32 mx-auto max-w-7xl">
			<div className="w-full mx-auto text-left md:w-11/12 xl:w-8/12 md:text-center">
				<h1 className="mb-3 text-5xl md:text-6xl font-extrabold text-gray-900  md:leading-tight md:font-extrabold">
					College Compendium
					<span className="block w-full text-6xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-blue-500">
						Is Under Renovation!
					</span>{" "}
				</h1>
				<p className="mb-6 text-lg text-gray-500 md:text-xl md:leading-normal">
					<i className="mb-4 block">
						We’re on a mission to bring the best of open source learning to
						students everywhere
					</i>
					Our site is currently down, but feel free to join our mailing list so
					we can let you know when we're back! You can also visit the{" "}
					<a
						href="https://github.com/GoldinGuy/CollegeCompendium"
						target="_blank"
						rel="noreferrer"
						className="text-fuchsia-500 hover:text-blue-500"
					>
						Github
					</a>{" "}
					for the raw data.
				</p>
				<form className="grid w-full grid-cols-1 gap-3 pt-1 mx-auto mb-8 lg:grid-cols-6 md:w-7/12">
					<label className="col-auto lg:col-span-4 ">
						<span className="sr-only">Your Email</span>
						<input
							className="w-full p-3 text-md text-gray-900 bg-gray-200 rounded-xl focus:outline-none focus:shadow-outline"
							type="email"
							placeholder="Enter your email..."
							required={true}
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</label>
					<button
						onClick={() => {
							if (
								email.includes("@") &&
								email.includes(".") &&
								process.env.REACT_APP_IFTTT_KEY
							) {
								console.log("Email is valid: ", email);
								fetch(
									`https://maker.ifttt.com/trigger/email_received/with/key/${process.env.REACT_APP_IFTTT_KEY}?&value1=${email}`,
									{
										method: "POST",
										mode: "no-cors",
										// headers: {
										// 	"Content-Type": "application/json"
										// 	// "Access-Control-Allow-Methods": "*"
										// },
										// body: JSON.stringify({
										// 	value1: email
										// })
									}
								);
								setEmail("");
							}
						}}
						className="w-full col-auto btn py-3 btn-primary btn-lg lg:col-span-2 rounded-xl text-white bg-fuchsia-400 hover:bg-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-semibold"
						type="submit"
					>
						Oh Yeah!
					</button>
				</form>
				<div className="flex flex-col justify-start mb-3 space-x-0 space-y-2 text-sm text-gray-600 md:flex-row md:justify-center md:space-x-8 md:space-y-0">
					<a
						className="hover:underline"
						href="mailto:team@collegecompendium.org&subject=College Compendium Inquiry"
					>
						Get In Touch <FontAwesomeIcon icon={faEnvelope} className="ml-2 " />
					</a>
					{/* <p className="">
							College Compendium is not affiliated with any classes
						</p> */}
					<a className="hover:underline" href="https://discord.gg/gKYSMeJ">
						Join Our Discord{" "}
						<FontAwesomeIcon icon={faDiscord} className="ml-2 " />
					</a>
				</div>
			</div>
		</section>
	);
};
export default TempSplashPage;
