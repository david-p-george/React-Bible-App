/* eslint-disable default-case */
import { useState, useEffect } from "react";
import CustomSelect from "./components/CustomSelect";

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
      .catch((error) => {document.getElementById('errorText').textContent = 'Sorry, server is down. Try again after a few minutes.'})
  }, []);
  

  useEffect(() => {
    let html = '';
    setHtmlText('');

    fetch(`https://labs.bible.org/api/?passage=${selectedBook}+${selectedChapter}&type=json&formatting=para`)
      .then((res) => {return res.json()})
      .then((json) => {json.map((obj) => (obj.text.includes('<p') === true ? html += obj.text.slice(0, 20) + `<sup><b>${obj.verse}</b></sup> ` + obj.text.slice(20) : html += `<sup><b>${obj.verse}</b></sup> ${obj.text}`))})
      .then(() => setHtmlText(html))
      .then(() => document.querySelector('#chapterTitle').textContent = selectedBook + ' ' + selectedChapter)
      .then(() => {document.getElementById('errorText').textContent = ''})
  }, [selectedBook, selectedChapter]);
  

  let bookOptions = [
      {label: 'Matthew', value: 'matthew'},
      {label: 'Mark', value: 'mark'},
      {label: 'Luke', value: 'luke'},
      {label: 'John', value: 'john'}
  ]

  let chapterOptionsFinder = (bookName) => {
    switch (bookName) {
      case 'Matthew':
        return 28;
        break;

      case 'Mark':
        return 16;
        break;

      case 'Luke':
        return 24;
        break;

      case 'John':
        return 21;
        break;
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
    setSelectedBook(obj.label);
    setFocus(true);
  }

  let handleOnChangeChapterOptions = (obj) => {
    setSelectedChapter(obj.value);
    setFocus(false);
  }

  let changeMode = () => {
    let html = document.querySelector('html');

    html.style.backgroundColor === 'black' ? html.style.backgroundColor = 'white' : html.style.backgroundColor = 'black';
    html.style.color === 'white' ? html.style.color = 'black' : html.style.color = 'white';

    setIsDark(!isDark);
  }

  return (
    <div>
      <p className="text-3xl text-red-600 flex justify-center items-center mt-2 mb-5" id="errorText"></p>

      <div className="flex flex-row justify-center items-center mb-6">
        <CustomSelect options={bookOptions} defaultValue={{ label: 'Select Book', value: 'selectBook' }} styles={{ width: '200px', color: 'black' }} onChangeFunc={handleOnChangeBookOptions}/>
        {selectedBook && <span onClick={() => setFocus(focus ? false : true)}><CustomSelect options={returnObjectOptions(chapterOptionsFinder(selectedBook))} defaultValue={{ label: 1, value: 1 }} styles={{ width: '100px', marginLeft: '15px', color: 'black' }} onChangeFunc={handleOnChangeChapterOptions} focus={focus} /></span>}
        <span onClick={changeMode} className="bg-blue-300 w-10 h-10 flex items-center justify-center rounded-full ml-5">
          {isDark ? 
          (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          )
          }
        </span>
      </div>

      <p id="chapterTitle" className="flex justify-center items-center text-3xl font-serif mb-3"></p>
      {htmlText && <main dangerouslySetInnerHTML={{ __html: htmlText }} className="flex flex-col items-center text-lg"></main>}
    </div>
  );
}

export default App;
