/* eslint-disable default-case */
import { useState, useEffect } from "react";
import CustomSelect from "./components/CustomSelect";
import Footer from "./components/Footer";

import { chapterOptionsFinder, bookOptions, getBookDetails } from './utils/data';
import headerIcon from './assets/servantsofthewordicondoc.webp'

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [htmlText, setHtmlText] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    let html = '';

    fetch('https://labs.bible.org/api/?passage=john+1&type=json&formatting=para')
      .then((res) => {return res.json()})
      .then((json) => {json.map((obj) => (obj.text.includes('<p') === true ? html += obj.text.slice(0, 20) + `<sup><b>${obj.verse}</b></sup> ` + obj.text.slice(20) : html += `<sup><b>${obj.verse}</b></sup> ${obj.text}`))})
      .then(() => setHtmlText(html))
      .then(() => document.querySelector('#chapterTitle').textContent = 'John 1')
      .then(() => setSelectedBook('john'))
      .then(() => setSelectedChapter(1))
  }, []);
  

  useEffect(() => {
    let html = '';
    setHtmlText('');

    fetch(`https://labs.bible.org/api/?passage=${selectedBook}+${selectedChapter}&type=json&formatting=para`)
      .then((res) => {return res.json()})
      .then((json) => {json.map((obj) => (html += handleObjTextAndVerse(obj.text, obj.verse)))})
      .then(() => setHtmlText(html))
      .then(() => document.querySelector('#chapterTitle').textContent = handleChapterTitle(selectedBook) + ' ' + selectedChapter)
      .then(() => {document.getElementById('errorText').textContent = ''})
  }, [selectedBook, selectedChapter]);
  
  let handleChapterTitle = (string) => {
    if (!isNaN(parseInt(string.charAt(0)))) {
      return string[0] + ' ' + string.charAt(1).toUpperCase() + string.slice(2);
    } if (string === 'songofsongs') {
      return 'Song of Solomon';
    } else {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }

  let handleObjTextAndVerse = (text, verse) => {
    if (verse === '1' && !text.includes('<p')) {
      return `<p class="bodytext"><sup><b>${verse}</b></sup> ${text}</p>`
    } else {
      if (text.includes('psasuper')) {
        return text.slice(0, 20) + `<sup><b>${verse}</b></sup> ` + text.slice(20);
      } else {
        if (text.includes('poetry')) {
          if (text.includes('<p') === true) {
            return text.slice(0, 18) + `<sup><b>${verse}</b></sup> ` + text.slice(18);
          } else {
            return `<sup><b>${verse}</b></sup> ${text}`;
          }
        } else {
          if (text.includes('<p') === true) {
            return text.slice(0, 20) + `<sup><b>${verse}</b></sup> ` + text.slice(20);
          } else {
            return `<sup><b>${verse}</b></sup> ${text}`;
          }
        }
      }
    }
  }

  let returnObjectOptions = (num) => {
    let objArray = [];
    
    for (let i = 1; i < num + 1; i++) {
      objArray.push({ label: i, value: i })
    }

    return objArray;
  }

  let handleOnChangeBookOptions = (obj) => {
    setSelectedBook(obj.value);
    setFocus(true);
  }

  let handleOnChangeChapterOptions = (obj) => {
    setSelectedChapter(obj.value);
    setFocus(false);
  }

  let handleNextChapter = () => {
    if (selectedBook === 'revelation' && selectedChapter === chapterOptionsFinder(selectedBook)) {
      console.log(' ');
    } else if (chapterOptionsFinder(selectedBook) === selectedChapter) {
      setSelectedBook(getBookDetails(selectedBook).nextBook);
      setSelectedChapter(1);
    } else {
      setSelectedChapter(selectedChapter + 1);
    }
  }

  let handlePrevChapter = () => {
    if (selectedBook === 'genesis' && selectedChapter === 1) {
      console.log(' ');
    } else if (selectedChapter === 1) {
      setSelectedBook(getBookDetails(selectedBook).previousBook);
      setSelectedChapter(chapterOptionsFinder(getBookDetails(selectedBook).previousBook));
    } else {
      setSelectedChapter(selectedChapter - 1)
    }
  }

  let changeMode = () => {
    let html = document.querySelector('html');

    html.style.backgroundColor === 'rgb(31, 41, 55)' ? html.style.backgroundColor = 'rgb(255, 255, 255)' : html.style.backgroundColor = 'rgb(31, 41, 55)';
    html.style.color === 'rgb(255, 255, 255)' ? html.style.color = 'rgb(31, 41, 55)' : html.style.color = 'rgb(255, 255, 255)';

    setIsDark(!isDark);
  }

  return (
    <div>
      <div className="">
        <img src={headerIcon} alt="nicenecreedicon" className="h-[200px] sm:h-[300px] w-screen" id="header-image" />
      </div>

      <p className="text-3xl text-red-600 flex justify-center items-center mt-2 mb-5" id="errorText"></p>

      <span className="w-fit fixed h-fit mt-12 sm:mt-0" id="previousChapSpan" onClick={handlePrevChapter}>
        <svg className="w-12 h-12 sm:w-16 sm:h-16 pl-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" /></svg>
      </span>

      <span className="w-fit h-fit fixed right-0 mt-12 sm:mt-0" id="nextChapSpan" onClick={handleNextChapter}>
        <svg className="w-12 h-12 sm:w-16 sm:h-16 pr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </span>

      <div className="flex flex-row justify-center items-center mb-6">
        <CustomSelect options={bookOptions} defaultValue={{ label: 'Select Book', value: 'selectBook' }} styles={{ width: '200px', color: 'black' }} onChangeFunc={handleOnChangeBookOptions}/>
        {selectedBook && <span onClick={() => setFocus(focus ? false : true)}><CustomSelect options={returnObjectOptions(chapterOptionsFinder(selectedBook))} defaultValue={{ label: 1, value: 1 }} styles={{ width: '100px', marginLeft: '15px', color: 'black' }} onChangeFunc={handleOnChangeChapterOptions} focus={focus} /></span>}
        
        <span onClick={changeMode} className={`w-10 h-10 flex items-center justify-center rounded-full ml-2 sm:ml-5 hover:text-white transition duration-300 ease-in ${isDark ? 'bg-gray-800 hover:bg-blue-300 text-white ' : 'bg-blue-300 hover:bg-gray-800 text-white'}`}>
          {!isDark ? 
          (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          )
          }
        </span>
      </div>

      <p id="chapterTitle" className="flex justify-center items-center text-3xl font-serif mb-3"></p>
      {htmlText && <main className="flex flex-col items-center text-xl"><div dangerouslySetInnerHTML={{ __html: htmlText }} id="container-text"></div></main>}

      <Footer />
    </div>
  );
}

export default App;
