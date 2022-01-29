/* eslint-disable default-case */
import { useState, useEffect } from "react";
import CustomSelect from "./components/CustomSelect";
import { Loader, Dimmer, Segment, Image } from 'semantic-ui-react'

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [htmlText, setHtmlText] = useState(null);

  useEffect(() => {
    let html = '';

    fetch('https://labs.bible.org/api/?passage=john+1&type=json&formatting=full')
      .then((res) => {return res.json()})
      .then((json) => {json.map((obj) => (html += obj.text))})
      .then(() => setHtmlText(html))
      .then(() => document.querySelector('#chapterTitle').textContent = 'John 1')
  }, []);
  

  useEffect(() => {
    let html = '';
    setHtmlText('');

    fetch(`https://labs.bible.org/api/?passage=${selectedBook}+${selectedChapter}&type=json&formatting=full`)
      .then((res) => {return res.json()})
      .then((json) => {json.map((obj) => (html += obj.text))})
      .then(() => setHtmlText(html))
      .then(() => document.querySelector('#chapterTitle').textContent = selectedBook + ' ' + selectedChapter)
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
  }

  let handleOnChangeChapterOptions = (obj) => {
    setSelectedChapter(obj.value);
  }

  if (!htmlText) {
    <Segment>
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
  }

  return (
    <div className="App">

      <div className="flex flex-row justify-center items-center mb-6">
        <CustomSelect options={bookOptions} defaultValue={{ label: 'Select Book', value: 'selectBook' }} styles={{ width: '200px' }} onChangeFunc={handleOnChangeBookOptions}/>
        {selectedBook && <CustomSelect options={returnObjectOptions(chapterOptionsFinder(selectedBook))} defaultValue={{ label: 1, value: 1 }} styles={{ width: '100px', marginLeft: '15px' }} onChangeFunc={handleOnChangeChapterOptions} />}
      </div>

      <p id="chapterTitle" className="flex justify-center items-center text-3xl font-serif mb-3"></p>
      {htmlText && <main dangerouslySetInnerHTML={{ __html: htmlText }} className="flex flex-col items-center"></main>}
    </div>
  );
}

export default App;
