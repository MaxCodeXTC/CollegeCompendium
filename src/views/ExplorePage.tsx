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

import Classes from "../components/classes/Classes";
import { Class, Textbook } from "../typings/interfaces";
import { shuffle, useQuery } from "../utils";
import { ContributeForm, Filters, LargeSearchBar, TextbookGallery } from "../components";
import { CLASS_TAGS } from "../globals";
import EmailForm from "../components/forms/EmailForm";

const ExplorePage = ({
	classes,
	textbooks,
	loading,
}: {
	classes: Class[];
	textbooks: Textbook[],
	loading: boolean;
}) => {
	let query = useQuery();

	return (
		<>
			<div className="px-4 pb-4 pt-6 mx-auto max-w-7xl">
				<h2 className="pb-6 mb-1 text-center congress text-2xl font-extrabold leading-tight text-gray-900 md:text-4xl">
					Find Your Next CS Resource
				</h2>
				<LargeSearchBar asTable={query.get("table") === "true"} />
				<Filters filters={shuffle(CLASS_TAGS) ?? []} />
				<Classes
					classes={shuffle(classes) ?? []}
					asTable={query.get("table") === "true"}
					loading={loading}
				/>
			</div>
			<EmailForm />
			<div className="px-4 pb-12 pt-1 mx-auto max-w-7xl">
				{textbooks.length > 0 && (
					<TextbookGallery textbooks={shuffle(textbooks) ?? []} />
				)}
			</div>
			{/* <ContributeForm /> */}
		</>
	);
};
export default ExplorePage;
