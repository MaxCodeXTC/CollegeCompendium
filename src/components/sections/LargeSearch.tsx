import posthog from "posthog-js";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const LargeSearchBar = ({ asTable }: { asTable: boolean }) => {
	const [query, setQuery] = useState("");

	const history = useHistory();

	const inputKeyDown = async (e: any) => {
		if (e.key === "Enter") {
			search(query);
		} else {
			const newQuery = e.target.value;
			setQuery(newQuery);
		}
	};

	const search = (term: string) => {
		term = term.toLowerCase().trim().replaceAll(" ", "-");

		if (term.length > 0) {
			posthog?.capture("searching", {
				term: term,
			});
			// TODO: addFilter(term);
			history.push(`/search?q=${term}${asTable ? "&table=true" : ""}`);
			setQuery("");
		}
	};

	return (
		<div
			className="flex max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl "
			// overflow-x-hidden
		>
			<div className="w-full my-0 text-gray-600">
				<section className="flex items-center justify-center sm:h-20">
					<div
						className="flex items-center justify-center w-full md:w-2/3"
						role="search"
						aria-label="Sitewide"
					>
						<label htmlFor="search" className="sr-only">
							Search by topic, university, or year
						</label>
						<input
							maxLength={25}
							type="text"
							id="search-explore"
							value={query}
							onChange={inputKeyDown}
							onKeyUp={inputKeyDown}
							placeholder="Search by topic, university, or year"
							spellCheck="false"
							className="px-6 sm:px-10 w-full py-4 -mr-8 font-sans transition-colors duration-300 transform bg-gray-200 border-none rounded-full focus:outline-none focus:bg-gray-300 ph-no-capture"
						/>
						<button
							className="transform border-none focus:border-0 focus:outline-none"
							aria-label="Submit"
							onClick={() => search(query)}
						>
							<svg
								className="text-gray-500 duration-200 fill-current hover:text-gray-700 focus:text-gray-700"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								width={20}
								height={20}
								viewBox="0 0 20 20"
							>
								<title>Search by topic, university, or year</title>
								<path d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z"></path>
							</svg>
						</button>
					</div>
				</section>
			</div>
		</div>
	);
};
export default LargeSearchBar;