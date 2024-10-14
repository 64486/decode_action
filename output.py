#2024-10-14 16:05:25
import requests
import time
import os
import random
def gg():
 url='https://jihulab.com/Xiaoqinetwork/inform/-/raw/main/gg.txt'
 response=requests.get(url)
 if response.status_code==200:
  print(response.text)
def Control():
 url="https://jihulab.com/Xiaoqinetwork/inform/-/raw/main/Control.json"
 response=requests.get(url)
 data=response.json()
 v=data["lhcm"]["v"]
 open_status=data["lhcm"]["open"]
 if open_status==0:
  print(data["lhcm"]["tz"])
  return False
 print(f"当前版本1.0，最新版本{v}")
 return True
def Login(account):
 url="https://www.bai6du.com/shareGameServlet/newAppAndroidNewLogin"
 headers={"Content-Type":"application/x-www-form-urlencoded","Content-Length":"162","Host":"www.bai6du.com","Connection":"Keep-Alive","Accept-Encoding":"gzip","User-Agent":"okhttp/3.12.10"}
 data={"account":account,"sgin":"55c74a8a837a93ffc83ef533ea35af17","currentStep":"0"}
 response=requests.post(url,headers=headers,data=data)
 response_data=response.json()
 token=response_data["userInfo"]["token"]
 return token
def Create(account,token):
 url="https://www.bai6du.com/shareGameServlet/newAppEvdayHongbaoChckOrCreate"
 headers={"Content-Type":"application/x-www-form-urlencoded","Content-Length":"162","Host":"www.bai6du.com","Connection":"Keep-Alive","Accept-Encoding":"gzip","User-Agent":"okhttp/3.12.10"}
 data={"account":account,"token":token,"sgin":"d4c50fad5fe6909c55a52a994fc46a7c"}
 response=requests.post(url,headers=headers,data=data)
 response_data=response.json()
 status=response_data["status"]
 print(f'广告刷新结果{status}')
def Video(account,token):
 url="https://www.bai6du.com/shareGameServlet/newAppEvdayHongbaoLookVideo"
 headers={"Content-Type":"application/x-www-form-urlencoded","Content-Length":"162","Host":"www.bai6du.com","Connection":"Keep-Alive","Accept-Encoding":"gzip","User-Agent":"okhttp/3.12.10"}
 data={"account":account,"token":token,"sgin":"8e1433dd9a393ee6ba61db883149d076","extra":"none"}
 response=requests.post(url,headers=headers,data=data)
 response_data=response.json()
 status=response_data["status"]
 print(f'观看成功')
def Receive(account,token):
 url="https://www.bai6du.com/shareGameServlet/newAppEvdayHongbaoReceive"
 headers={"Content-Type":"application/x-www-form-urlencoded","Content-Length":"162","Host":"www.bai6du.com","Connection":"Keep-Alive","Accept-Encoding":"gzip","User-Agent":"okhttp/3.12.10"}
 data={"account":account,"token":token,"sgin":"f6a48aea981ce329cf98968638fa036e","reveiceHongBaoType":"1级红包"}
 response=requests.post(url,headers=headers,data=data)
 response_data=response.json()
 msg=response_data["msg"]
 print(f'{msg}')
def wNewApi(account,token):
 url="https://www.bai6du.com/shareGameServlet/newAppWithdrawNewApi"
 headers={"Content-Type":"application/x-www-form-urlencoded","Content-Length":"162","Host":"www.bai6du.com","Connection":"Keep-Alive","Accept-Encoding":"gzip","User-Agent":"okhttp/3.12.10"}
 data={"account":account,"token":token,"sgin":"5cd6d52da04b4ebfa7335dd4fb98fa7d","withdrawType":"alipay","withdrawTotalScore":"1000"}
 response=requests.post(url,headers=headers,data=data)
 response_data=response.json()
 msg=response_data["msg"]
 print(f'{msg}')
if __name__=="__main__":
 account=os.environ.get('lhcm')
 if not account:
  print("请设置环境变量在运行")
 else:
  account_list=account.split('@')
  for num,account in enumerate(account_list,start=1):
   gg()
   print(f"======== ▷ 第 {num} 个账号 ◁ ========")
   if Control():
    token=Login(account)
    print("=====开始红包广告刷新=====")
    Create(account,token)
    print("=====开始红包广告请求=====")
    for i in range(3):
     Video(account,token)
     delay=random.randint(30,40)
     time.sleep(delay)
    print("=====开始红包广告奖励领取=====")
    Receive(account,token)
    print("=====开始提现马内=====")
    wNewApi(account,token)
