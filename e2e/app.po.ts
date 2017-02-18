import { browser, element, by } from 'protractor';

export class Weather2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('wa-root h1')).getText();
  }
}
