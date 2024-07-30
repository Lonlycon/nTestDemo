
//渲染列表：
import { TinyColor } from '@ctrl/tinycolor'
import { Button, ConfigProvider, } from 'antd'
import React, { useEffect } from 'react'
import "./css/style.scss"
import Sakana from 'sakana'
const colors1 = ['#6253E1', '#04BEFE']
const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString())
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString())



export default function Login () {
  function loginButton () {
    alert('你点击了登录！')
  }
  function registerButton () {
    alert('你点击了注册！')
  }
  //按enter键登录
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      loginButton()
    }
  }
  useEffect(() => {
    // 在这里执行你的方法
    Sakana.setMute(false) // 开启声音
    Sakana.init({
      el: '.sakana-box',     // 启动元素 node 或 选择器
      character: 'takina',          // 启动角色 'chisato','takina' 
      inertia: 0.08,              // 惯性
      decay: 0.99,              // 衰减
      r: 6,                // 启动角度
      y: 1,                // 启动高度
      scale: 1,                 // 缩放倍数
      translateY: 0,                 // 位移高度
      canSwitchCharacter: true,     // 允许换角色
      onSwitchCharacter (character) {  // 切换角色回调
        console.log(`${character} dayo~`)
      },
    })
    return () => { } // 返回一个空函数
  }, []) // 空数组表示仅在挂载和卸载时执行一次，若有参数，则在参数变化时执行





  return (

    <div className="login-body" style={{ backgroundImage: "url('https://www.loliapi.com/acg/')" }}>

      <div className="box">
        <h2>Login</h2>
        <form id="loginForm">

          <div className="input-box" name="username">
            <label>账号</label>
            <input id="username" type="text" onKeyDown={handleKeyPress} />
          </div>

          <div className="input-box" name="password">
            <label>密码</label>
            <input id="password" type="password" onKeyDown={handleKeyPress} />
          </div>

          <div className="btn-box">
            <a id="forget">忘记密码?</a>
            <div>
              {/* <button type="button" id="loginButton" onClick={loginButton}>
                登录
              </button>
              <button type="button" id="zhuce" onClick={registerButton}>
                注册
              </button> */}

              <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      colorPrimary: `linear-gradient(135deg, ${colors1.join(', ')})`,
                      colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
                        colors1
                      ).join(', ')})`,
                      colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                        colors1
                      ).join(', ')})`,
                      lineWidth: 0,
                    },
                  },
                }}
              >
                <Button type="primary" id="loginButton" onClick={loginButton} size="large">
                  登录
                </Button>
              </ConfigProvider>
              <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      colorPrimary: `linear-gradient(135deg, ${colors1.join(', ')})`,
                      colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
                        colors1
                      ).join(', ')})`,
                      colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                        colors1
                      ).join(', ')})`,
                      lineWidth: 0,
                    },
                  },
                }}
              >
                <Button type="primary" id="registerButtonButton" onClick={registerButton} size="large">
                  注册
                </Button>
              </ConfigProvider>

            </div>
          </div>


        </form>

      </div>

      <div className="sakana-box">
      </div>

    </div>

  )

}

