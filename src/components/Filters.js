const Header = () => {
	const template = `
    <p>Filters:</p>
        <button class="filter" id="allOptions">Show All</button>
        <button class="filter" id="onlineOrdering">Online Ordering</button>
        <button class="filter" id="takeout">Takeout</button>
    `;
	return template;
};
export default Header;
