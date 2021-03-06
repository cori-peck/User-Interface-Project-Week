// JS goes here

class Overlay {
    constructor(overlay) {
        this.overlay = overlay;
        this.button = this.overlay.querySelector('.icon');
        this.content = this.overlay.querySelector('.overlay-content');
        this.closeButton = this.overlay.querySelector('.closeBtn');

        this.button.addEventListener('click', () => {this.toggleContent()});
        this.closeButton.addEventListener('click', () => {this.toggleContent()});
    }

    toggleContent() {
        this.content.classList.toggle('overlay-hidden');
        this.overlay.querySelector('.icon').classList.toggle('icon-hidden');
        this.overlay.querySelector('.closeBtn').classList.toggle('icon-hidden');
    }
}

let overlays = document.querySelectorAll('.dropdown').forEach( overlay => new Overlay(overlay));


class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
        this.tabItem = new TabItem(this.itemElement);

        this.element.addEventListener('click', () => {this.select()});
    };

    select() {
        const links = document.querySelectorAll('.tabs-link');
        Array.from(links).forEach(link => link.classList.remove('tabs-link-selected'));

        this.element.classList.add('tabs-link-selected');
        
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        const items = document.querySelectorAll('.tabs-item');

        items.forEach(item => {
            item.classList.remove('tabs-item-selected');
        });

        this.element.classList.add('tabs-item-selected');
    }
}

const links = document.querySelectorAll('.tabs-link')
links.forEach( links => new TabLink(links));