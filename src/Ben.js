import axios from 'axios'
import { useState, useEffect } from 'react'
import React from 'react'
import "./css/booksStyle.scss"
// import { DownloadOutlined } from '@ant-design/icons'
// import { Button } from 'antd'

export default function Ben () {
  //axios得到数据
  const [books, setBooks] = useState([]) // 初始化书籍状态


  useEffect(() => {
    // 在这里执行你的方法
    console.log('自动执行！')
    axiosTest() // 调用axiosTest方法
    return () => { } // 返回一个空函数
  }, []) // 空数组表示仅在挂载和卸载时执行一次，若有参数，则在参数变化时执行

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
        <img className="img1" src={book.file} alt={book.name} height="494px" />
      </a>
      <div className="caption">
        <h3>{book.name}</h3>
        <h3>{book.des}</h3>
      </div>
    </div>
  ))

  return (
    <div className="App">
      {/* <Button type="primary" onClick={axiosTest}>axios</Button>
      <Button type="primary" icon={<DownloadOutlined />} size={'large'}>
        Download
      </Button> */}
      <div>
        <div className="ben-body">
          {booksDiv}
        </div>
      </div>
    </div>
  )

}



