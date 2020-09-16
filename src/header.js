export {createHeader};

const createHeader = () => {
    const header = document.createElement('header');

    const span = document.createElement('span');
    span.setAttribute('id', 'logo');
    const logoSVG = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 333.9 87.2" style="enable-background:new 0 0 333.9 87.2;" xml:space="preserve"><g><path d="M41.6,38.7c0.2,0.2,0.4,0.5,0.7,0.5c0.5-0.1,0.6-0.6,0.6-0.9v-7.4c0-0.5,0.1-0.9,0.3-1.2c0.2-0.3,0.4-0.4,0.5-0.4c0.1,0,0.4,0.1,0.5,0.4c0.2,0.3,0.3,0.7,0.3,1.2v7.4c0,0.4,0.1,0.9,0.6,0.9c0.4,0,0.5-0.2,0.7-0.5l12-16.3c0.7-1,1.1-2.2,1.1-3.4c0-1.7-0.7-3.4-2.1-4.5L44.3,4.3c-0.1-0.1-0.3-0.2-0.5-0.2c-0.2,0-0.3,0-0.5,0.2L30.7,14.4c-1.4,1.1-2.2,2.8-2.2,4.6c0,1.2,0.4,2.4,1.1,3.4L41.6,38.7 M19,50.1l19.2-6.3c0.3-0.1,0.7-0.3,0.7-0.7c0-0.5-0.4-0.6-0.7-0.7l-1.6-0.5l-5.4-1.8c-0.8-0.3-1.4-0.9-1.3-1.2l0-0.1c0-0.2,0.4-0.4,1-0.4c0.3,0,0.5,0,0.8,0.1l7,2.3c0.2,0.1,0.3,0.1,0.5,0.1c0.1,0,0.3,0,0.4-0.1c0.1-0.1,0.2-0.3,0.2-0.5c0-0.2-0.1-0.4-0.3-0.7L27.8,23.2c-1.1-1.6-2.9-2.4-4.7-2.4c-1.1,0-2.2,0.3-3.1,0.9L6.4,30.6C6.1,30.8,6,31,6,31.2c0,0.1,0,0.2,0,0.3l5.7,15.1c0.9,2.3,3.1,3.7,5.5,3.7C17.9,50.4,18.5,50.3,19,50.1z M42,48.6c0-0.4-0.1-0.9-0.6-0.9c-0.4,0-0.5,0.2-0.7,0.5l-1,1.4l-3.4,4.6c-0.4,0.6-1,0.9-1.4,0.9c-0.1,0-0.2,0-0.3-0.1c-0.1-0.1-0.2-0.2-0.2-0.5c0-0.4,0.2-0.9,0.5-1.3l3.4-4.6l1-1.4c0.2-0.2,0.3-0.4,0.3-0.7c0-0.2-0.1-0.3-0.2-0.5c-0.1-0.1-0.3-0.1-0.4-0.1c-0.1,0-0.3,0-0.5,0.1l-19.2,6.1c-2.4,0.8-4,3.1-4,5.6c0,0.5,0.1,1,0.2,1.5l4.3,15.6c0.1,0.3,0.4,0.5,0.7,0.5v0l16.2-0.8c3-0.2,5.5-2.7,5.5-5.8l0,0v0L42,48.6z M67.1,52.6l-19.2-6.2c-0.2-0.1-0.3-0.1-0.5-0.1c-0.1,0-0.3,0-0.4,0.1c-0.1,0.1-0.2,0.3-0.2,0.5c0,0.2,0.1,0.4,0.3,0.7l1,1.4l3.4,4.6c0.3,0.5,0.5,0.9,0.5,1.3c0,0.3-0.1,0.4-0.2,0.5c-0.1,0-0.1,0.1-0.3,0.1c-0.3,0-1-0.3-1.4-0.9l-3.4-4.6l-1-1.4l0,0c-0.2-0.3-0.4-0.5-0.7-0.5c-0.6,0.1-0.6,0.5-0.6,0.9l-0.1,20.2l0,0c0,3.1,2.5,5.6,5.5,5.8l16.2,0.8l0,0c0.3,0,0.6-0.2,0.7-0.5l4.3-15.6c0.1-0.5,0.2-1,0.2-1.5C71.1,55.7,69.5,53.4,67.1,52.6z M80.7,31.3l-13.5-8.9c-1-0.6-2.1-0.9-3.1-0.9c-1.8,0-3.6,0.8-4.7,2.4L47.5,40.3c-0.1,0.2-0.3,0.4-0.3,0.7c0,0.2,0.1,0.3,0.2,0.5c0.1,0.1,0.3,0.1,0.4,0.1c0.1,0,0.3,0,0.5-0.1l1.6-0.5l5.4-1.8c0.3-0.1,0.6-0.1,0.8-0.1c0.6,0,0.9,0.2,1,0.4l0,0.1c0,0.3-0.5,0.9-1.3,1.2l-7,2.3v0c-0.3,0.1-0.7,0.3-0.7,0.7c0,0.5,0.4,0.6,0.7,0.7L68,50.8c0.6,0.2,1.2,0.3,1.8,0.3c2.4,0,4.6-1.4,5.5-3.7L81,32.2l0-0.3C81.1,31.7,81,31.5,80.7,31.3zM47.1,43.6c0-1.9-1.6-3.5-3.5-3.5c-1.9,0-3.5,1.6-3.5,3.5c0,1.9,1.6,3.5,3.5,3.5C45.5,47.1,47.1,45.5,47.1,43.6z"/><path d="M0,43.6C0,19.5,19.5,0,43.6,0c24.1,0,43.6,19.5,43.6,43.6c0,24.1-19.5,43.6-43.6,43.6C19.5,87.2,0,67.6,0,43.6 M14.4,14.4C6.9,21.9,2.3,32.2,2.3,43.6c0,11.4,4.6,21.7,12.1,29.2c7.5,7.5,17.8,12.1,29.2,12.1c11.4,0,21.7-4.6,29.2-12.1c7.5-7.5,12.1-17.8,12.1-29.2c0-11.4-4.6-21.7-12.1-29.2C65.3,6.9,55,2.3,43.6,2.3C32.2,2.3,21.9,6.9,14.4,14.4z"/><path d="M111,37.4v15c0,0.4,0,0.8,0.1,1.1h-6.2c0.1-0.3,0.1-0.7,0.1-1.1v-15h-4.7c-0.7,0-1.2,0.1-1.6,0.2v-5.6h18.9v5.6c-0.4-0.1-0.9-0.2-1.6-0.2H111"/><path d="M135.2,54c-2.5,0-4.6-0.7-6.3-2c-1.8-1.4-2.7-3.4-2.8-5.8h6.2c-0.1,0.9,0.1,1.7,0.6,2.2c0.5,0.5,1.2,0.7,2.2,0.7c1.7,0,2.6-0.5,2.6-1.6c0-0.6-0.5-1.1-1.4-1.7c-0.1,0-1.4-0.7-3.8-1.9c-1.6-0.8-2.8-1.6-3.6-2.4c-1.1-1.1-1.6-2.4-1.6-3.9c0-2,0.8-3.6,2.4-4.7c1.4-1,3.2-1.5,5.3-1.5c2.3,0,4.2,0.5,5.7,1.6c1.7,1.2,2.6,2.9,2.7,5.1h-6c-0.1-1.4-0.8-2-2.1-2c-1.3,0-2,0.4-2,1.3c0,0.4,0.7,1,2.2,1.7c0.6,0.3,1.6,0.7,2.8,1.3c3.6,1.9,5.5,4.2,5.5,7.1c0,1.7-0.6,3.1-1.9,4.3C140.2,53.3,138.1,54,135.2,54"/><path d="M162.2,54c-2.8,0-5.1-0.9-6.8-2.6c-1.7-1.8-2.5-4.1-2.5-6.9V33.1c0-0.3,0-0.7-0.1-1.2h6.1c-0.1,0.5-0.1,0.9-0.1,1.2v12.2c0,1,0.3,1.8,1,2.5c0.6,0.7,1.5,1.1,2.4,1.1c1,0,1.8-0.4,2.4-1.1c0.7-0.7,1-1.5,1-2.5V33.1c0-0.3,0-0.7-0.1-1.2h6.1c-0.1,0.4-0.1,0.8-0.1,1.2v11.4c0,2.9-0.8,5.2-2.5,6.9C167.2,53.2,165,54,162.2,54"/><path d="M187.8,54c-2.1,0-3.8-0.7-5.1-2.1c-1.3-1.4-2-3.1-2.1-5.3h6.4c0,0.3-0.1,0.5-0.1,0.6c0,0.9,0.4,1.4,1.2,1.4c0.3,0,0.6-0.1,0.9-0.4c0.2-0.3,0.3-0.6,0.3-0.9V33.1c0-0.3,0-0.7-0.1-1.2h6c-0.1,0.4-0.1,0.8-0.1,1.2v13.7c0,2.3-0.6,4.1-1.8,5.3C191.9,53.4,190.1,54,187.8,54"/><path d="M204.8,53.5c0.1-0.5,0.2-1,0.2-1.3V33.3c0-0.3-0.1-0.8-0.2-1.4h6c-0.1,0.6-0.2,1-0.2,1.4v18.8c0,0.3,0.1,0.8,0.2,1.3H204.8"/><path d="M232,37.4v15c0,0.4,0,0.8,0.1,1.1h-6.2c0.1-0.3,0.1-0.7,0.1-1.1v-15h-4.7c-0.7,0-1.2,0.1-1.6,0.2v-5.6h18.9v5.6c-0.4-0.1-0.9-0.2-1.6-0.2H232"/><path d="M262.9,53.5c0-0.2-0.1-0.6-0.2-1.1l-0.9-2.6h-7.1l-1,2.6c-0.1,0.3-0.2,0.6-0.2,0.9c0,0.1,0,0.2,0,0.2H247l8.5-21.5h5.3l8.5,21.5H262.9 M258.2,40.2l-1.6,4.2h3.2L258.2,40.2z"/><path d="M286,53.5c0.1-0.3,0.1-0.7,0.1-1.1V33.1c0-0.4,0-0.8-0.1-1.2h6c-0.1,0.4-0.1,0.8-0.1,1.2v15h9.9c0.5,0,1-0.1,1.5-0.2v5.5H286"/><path d="M327.5,53.5c0-0.2-0.1-0.6-0.2-1.1l-0.9-2.6h-7.1l-1,2.6c-0.1,0.3-0.2,0.6-0.2,0.9c0,0.1,0,0.2,0,0.2h-6.4l8.5-21.5h5.3l8.5,21.5H327.5 M322.8,40.2l-1.6,4.2h3.2L322.8,40.2z"/><path d="M120.5,67.7c0-0.1,0-0.2-0.1-0.5l-0.6-1.2h-4.5l-0.6,1.1c-0.1,0.2-0.1,0.3-0.1,0.4l0,0.1h-4.1l5.3-9.6h3.4l5.3,9.6H120.5M117.6,61.8l-1,1.9h2L117.6,61.8z"/><path d="M136,67.7c0-0.1-0.1-0.3-0.2-0.5c-0.3-0.4-1.1-1.4-2.3-3.1h-1v3.1c0,0.2,0,0.4,0.1,0.5h-3.7c0.1-0.2,0.1-0.3,0.1-0.5v-8.6c0-0.1,0-0.3-0.1-0.5h6.3c1.2,0,2.3,0.3,3.2,0.8c0.9,0.6,1.4,1.3,1.4,2.2c0,0.6-0.2,1.1-0.7,1.6c-0.5,0.5-1.2,0.8-2,1.1l3.3,3.9H136 M134.5,60.3h-2.2v1.6h2.2c0.3,0,0.6-0.1,0.9-0.2c0.2-0.1,0.4-0.3,0.4-0.6c0-0.2-0.1-0.4-0.4-0.6C135.1,60.4,134.9,60.3,134.5,60.3z"/><path d="M151.9,60.6v6.7c0,0.2,0,0.3,0.1,0.5h-3.9c0.1-0.2,0.1-0.3,0.1-0.5v-6.7h-2.9c-0.4,0-0.8,0-1,0.1v-2.5h11.9v2.5c-0.2-0.1-0.6-0.1-1-0.1H151.9"/><path d="M160.5,67.7c0.1-0.2,0.1-0.4,0.1-0.6v-8.4c0-0.1,0-0.3-0.1-0.6h3.8c-0.1,0.3-0.1,0.5-0.1,0.6v8.4c0,0.2,0,0.4,0.1,0.6H160.5"/><path d="M174.4,68c-1.6,0-2.9-0.3-4-0.9c-1.1-0.6-1.7-1.5-1.8-2.6h3.9c-0.1,0.4,0.1,0.7,0.4,1c0.3,0.2,0.8,0.3,1.4,0.3c1.1,0,1.6-0.2,1.6-0.7c0-0.3-0.3-0.5-0.9-0.8c-0.1,0-0.9-0.3-2.4-0.8c-1-0.4-1.8-0.7-2.3-1.1c-0.7-0.5-1-1.1-1-1.7c0-0.9,0.5-1.6,1.5-2.1c0.9-0.5,2-0.7,3.3-0.7c1.4,0,2.6,0.2,3.6,0.7c1.1,0.5,1.6,1.3,1.7,2.3h-3.8c-0.1-0.6-0.5-0.9-1.3-0.9c-0.8,0-1.2,0.2-1.3,0.6c0,0.2,0.4,0.4,1.4,0.8c0.4,0.1,1,0.3,1.8,0.6c2.3,0.8,3.4,1.9,3.4,3.1c0,0.7-0.4,1.4-1.2,1.9C177.5,67.6,176.2,68,174.4,68"/><path d="M193.6,67.7c0-0.1,0-0.2-0.1-0.5l-0.6-1.2h-4.5l-0.6,1.1c-0.1,0.2-0.1,0.3-0.1,0.4l0,0.1h-4l5.3-9.6h3.4l5.3,9.6H193.6M190.6,61.8l-1,1.9h2L190.6,61.8z"/><path d="M209.9,67.7l-4.2-5v4.5c0,0.2,0,0.3,0.1,0.5H202c0.1-0.1,0.1-0.3,0.1-0.5v-9.1h3.9l4.1,4.9v-4.4c0-0.2,0-0.4-0.1-0.5h3.8c-0.1,0.2-0.1,0.3-0.1,0.5v9.1H209.9"/><path d="M236.2,67.7l-4.2-5v4.5c0,0.2,0,0.3,0.1,0.5h-3.8c0.1-0.1,0.1-0.3,0.1-0.5v-9.1h3.9l4.1,4.9v-4.4c0-0.2,0-0.4-0.1-0.5h3.8c-0.1,0.2-0.1,0.3-0.1,0.5v9.1H236.2"/><path d="M251,68c-2.1,0-3.8-0.5-5-1.4c-1.1-0.9-1.7-2.1-1.7-3.6c0-1.5,0.6-2.8,1.7-3.6c1.2-0.9,2.8-1.4,5-1.4c2.1,0,3.8,0.5,5,1.4c1.1,0.9,1.7,2.1,1.7,3.6c0,1.5-0.5,2.8-1.7,3.6C254.9,67.5,253.2,68,251,68 M251,60c-0.9,0-1.7,0.3-2.2,1c-0.4,0.6-0.7,1.2-0.7,1.9c0,0.7,0.2,1.3,0.7,1.9c0.5,0.7,1.3,1,2.2,1c0.9,0,1.7-0.3,2.2-1c0.4-0.6,0.7-1.2,0.7-1.9c0-0.7-0.2-1.3-0.7-1.9C252.7,60.3,252,60,251,60z"/><path d="M268.1,68c-2.1,0-3.8-0.5-5-1.4c-1.1-0.9-1.7-2.1-1.7-3.6c0-1.5,0.6-2.8,1.7-3.6c1.2-0.9,2.8-1.4,5-1.4c2.1,0,3.8,0.5,5,1.4c1.1,0.9,1.7,2.1,1.7,3.6c0,1.5-0.6,2.8-1.7,3.6C271.9,67.5,270.2,68,268.1,68 M268.1,60c-0.9,0-1.7,0.3-2.2,1c-0.4,0.6-0.7,1.2-0.7,1.9c0,0.7,0.2,1.3,0.7,1.9c0.6,0.7,1.3,1,2.2,1c0.9,0,1.7-0.3,2.2-1c0.4-0.6,0.7-1.2,0.7-1.9c0-0.7-0.2-1.3-0.7-1.9C269.8,60.3,269,60,268.1,60z"/><path d="M284.7,67.7h-5.4c0.1-0.2,0.1-0.3,0.1-0.5v-8.6c0-0.1,0-0.3-0.1-0.5h5.4c1.8,0,3.4,0.5,4.6,1.4c1.2,0.9,1.8,2.1,1.8,3.4c0,1.3-0.6,2.4-1.8,3.4C288.1,67.2,286.5,67.7,284.7,67.7 M284.5,60.5h-1.6v4.8h1.4c0.8,0,1.5-0.3,2.1-0.8c0.6-0.5,0.9-1.1,0.9-1.6c0-0.6-0.3-1.1-0.8-1.6C286,60.8,285.3,60.5,284.5,60.5z"/><path d="M295.8,67.7c0.1-0.2,0.1-0.3,0.1-0.5v-8.6c0-0.2,0-0.3-0.1-0.5h3.8c-0.1,0.2-0.1,0.4-0.1,0.5v6.7h6.2c0.3,0,0.7,0,1-0.1v2.5H295.8"/><path d="M311,67.7c0.1-0.2,0.1-0.4,0.1-0.5v-8.6c0-0.1,0-0.3-0.1-0.5h10.4v2.4c-0.2,0-0.5-0.1-0.8-0.1h-6v1h5.2v2.4h-5.2v1.5h6c0.2,0,0.5,0,0.8-0.1v2.4H311"/></g></svg>';
    span.innerHTML = logoSVG;

    const navBar = document.createElement('div');
    navBar.setAttribute('id', 'nav-bar');
    
    const homeTab = document.createElement('div');
    homeTab.setAttribute('id', 'home-tab');
    homeTab.classList.add('tabs');
    homeTab.textContent = 'Home';

    const menuTab = document.createElement('div');
    menuTab.setAttribute('id', 'menu-tab');
    menuTab.classList.add('tabs');
    menuTab.textContent = 'Menu';

    const contactTab = document.createElement('div');
    contactTab.setAttribute('id', 'contact-tab');
    contactTab.classList.add('tabs');
    contactTab.textContent = 'Contact';

    navBar.appendChild(homeTab);
    navBar.appendChild(menuTab);
    navBar.appendChild(contactTab);

    header.appendChild(span);
    header.appendChild(navBar);

    const body = document.querySelector('body');
    body.insertAdjacentElement('afterbegin', header);
};