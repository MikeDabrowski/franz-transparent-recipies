'use strict';

const fs = require('fs');
const path = require('path');

function hideChannels() {
  const regs = [/:peach:/, /crazy about/, /@pretty6k/, /instagram/, /(Д|л|Ф|и|п)/];
  [...document.querySelectorAll('.nav.nav-pills.nav-stacked > li')]
    .filter(el => !el.classList.contains('hide'))
    .filter(el => regs.some(reg => reg.test(el.querySelector('.im_dialog_peer span').textContent.toLowerCase())))
    .forEach(el => el.classList.add('hide'));
}

module.exports = Franz => {
  hideChannels();

  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'k') {
      const inputSearch = document.querySelector('.im_dialogs_search>input');
      if (inputSearch) {
        inputSearch.focus();
      }
    }
    if (e.altKey && /\d/.test(e.key)) {
      const chats = document.querySelectorAll('.im_dialog');
      const selectedChat = chats[e.key - 1];
      if (chats.length && selectedChat) {
        let clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent('mousedown', true, true);
        selectedChat.dispatchEvent(clickEvent);
      }
    }
  });


  const getMessages = function getMessages() {
    hideChannels();
    let count = 0;
    const searchElement = document.querySelector('.im_dialogs_search_field');
    if (searchElement && searchElement.value === '') {
      const elements = document.querySelectorAll('.im_dialog_badge:not(.ng-hide):not(.im_dialog_badge_muted)');
      if (elements) {
        for (let i = 0; i < elements.length; i += 1) {
          if (elements[i].innerHTML !== 0) {
            count += 1;
          }
        }
      }
    }

    Franz.setBadge(count);
  };

  const cssFiles = fs.readdirSync(__dirname)
    .filter((fileName) => (fileName.startsWith('theme-') && fileName.endsWith('.css')));
  cssFiles.forEach((fileName) => {
    Franz.injectCSS(path.join(__dirname, fileName));
  });
  Franz.loop(getMessages);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbGVncmFtL3dlYnZpZXcuanMiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiRnJhbnoiLCJnZXRNZXNzYWdlcyIsImNvdW50Iiwic2VhcmNoRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsImlubmVySFRNTCIsInNldEJhZGdlIiwiaW5qZWN0Q1NTIiwiam9pbiIsIl9fZGlybmFtZSIsImxvb3AiXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0FBRUFDLE9BQU9DLE9BQVAsR0FBa0JDLEtBQUQsSUFBVztBQUMxQixRQUFNQyxjQUFjLFNBQVNBLFdBQVQsR0FBdUI7QUFDekMsUUFBSUMsUUFBUSxDQUFaO0FBQ0EsVUFBTUMsZ0JBQWdCQyxTQUFTQyxhQUFULENBQXVCLDBCQUF2QixDQUF0QjtBQUNBLFFBQUlGLGlCQUFpQkEsY0FBY0csS0FBZCxLQUF3QixFQUE3QyxFQUFpRDtBQUMvQyxZQUFNQyxXQUFXSCxTQUFTSSxnQkFBVCxDQUEwQiw0REFBMUIsQ0FBakI7QUFDQSxVQUFJRCxRQUFKLEVBQWM7QUFDWixhQUFLLElBQUlFLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsU0FBU0csTUFBN0IsRUFBcUNELEtBQUssQ0FBMUMsRUFBNkM7QUFDM0MsY0FBSUYsU0FBU0UsQ0FBVCxFQUFZRSxTQUFaLEtBQTBCLENBQTlCLEVBQWlDO0FBQy9CVCxxQkFBUyxDQUFUO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBRURGLFVBQU1ZLFFBQU4sQ0FBZVYsS0FBZjtBQUNELEdBZkQ7O0FBaUJBRixRQUFNYSxTQUFOLENBQWdCakIsS0FBS2tCLElBQUwsQ0FBVUMsU0FBVixFQUFxQixhQUFyQixDQUFoQjtBQUNBZixRQUFNZ0IsSUFBTixDQUFXZixXQUFYO0FBQ0QsQ0FwQkQiLCJmaWxlIjoidGVsZWdyYW0vd2Vidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKEZyYW56KSA9PiB7XG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gZnVuY3Rpb24gZ2V0TWVzc2FnZXMoKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBjb25zdCBzZWFyY2hFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltX2RpYWxvZ3Nfc2VhcmNoX2ZpZWxkJyk7XG4gICAgaWYgKHNlYXJjaEVsZW1lbnQgJiYgc2VhcmNoRWxlbWVudC52YWx1ZSA9PT0gJycpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmltX2RpYWxvZ19iYWRnZTpub3QoLm5nLWhpZGUpOm5vdCguaW1fZGlhbG9nX2JhZGdlX211dGVkKScpO1xuICAgICAgaWYgKGVsZW1lbnRzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoZWxlbWVudHNbaV0uaW5uZXJIVE1MICE9PSAwKSB7XG4gICAgICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIEZyYW56LnNldEJhZGdlKGNvdW50KTtcbiAgfTtcblxuICBGcmFuei5pbmplY3RDU1MocGF0aC5qb2luKF9fZGlybmFtZSwgJ3NlcnZpY2UuY3NzJykpO1xuICBGcmFuei5sb29wKGdldE1lc3NhZ2VzKTtcbn07XG4iXX0=
