
//渲染列表：
import { TinyColor } from '@ctrl/tinycolor'
import { Button, ConfigProvider, } from 'antd'
import "./css/style.scss"
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
  return (
    <div className="login-body">
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

    </div>
  )
}

