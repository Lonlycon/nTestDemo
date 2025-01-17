// import logo from './logo.svg';
// import './App.css';
import { DownloadOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import axios from 'axios'
import { useState } from 'react'
import React from 'react'
import "./css/booksStyle.scss"





function App () {

  const [books, setBooks] = useState([]) // 初始化书籍状态

  const axiosTest = async () => { // 定义一个异步函数用于测试axios请求
    axios.get('/book/all')
      .then(response => {
        console.log('成功', response.data) // 请求成功时打印响应数据
        setBooks(response.data) // 将响应数据设置到books状态
      })
      .catch(error => {
        console.log('失败', error) // 请求失败时打印错误信息
      })
  }

  const booksDiv = books.map(book => ( // 定义一个函数用于渲染书籍列表
    <div className="a2" key={book.id}>
      <a href={`https://nhentai.net/artist/${book.bookname}`}>
        <img src={book.file} alt={book.name} height="494px" />
      </a>
      <div className="caption">
        <h3>{book.name}</h3>
        <h3>{book.des}</h3>
      </div>
    </div>
  ))

  return (
    <div className="App">
      <Button type="primary" onClick={axiosTest}>axios</Button>
      <Button type="primary" icon={<DownloadOutlined />} size={'large'}>
        Download
      </Button>
      <div>
        <div className="books-container">
          {booksDiv}
        </div>
      </div>
    </div>


  )
}

export default App
