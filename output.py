#2024-10-14 06:53:15
import requests
import time
import random
import uuid
import os
class yuanshen:
 def __init__(self,cookie):
  self.cookie=cookie.split('#')[0]
  self.devtoken=cookie.split('#')[1]
  self.oaid=cookie.split('#')[2]
  self.deviceid=cookie.split('#')[3]
  self.headers={"Host":"speciesweb.whjzjx.cn","x-app-id":"7","authorization":f"{self.cookie}","platform":"1","manufacturer":"Xiaomi","version_name":"2.8.6.1","user_agent":"Mozilla/5.0 (Linux; Android 14; 23113RKC6C Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/118.0.0.0 Mobile Safari/537.36","dev_token":f"{self.devtoken}","app_version":"2.8.6.1","device_platform":"android","personalized_recommend_status":"1","device_type":"23113RKC6C","device_brand":"Redmi","os_version":"14","channel":"default","raw_channel":"default","oaid":f"{self.oaid}","msa_oaid":f"{self.oaid}","uuid":"randomUUID_c3a0b1e8-312b-4313-bb6d-cf958cb449fa","device_id":f"{self.deviceid}","ab_id":"","content-length":"0","accept-encoding":"gzip","user-agent":"okhttp/4.10.0"}
  self.post_header={"Host":"speciesweb.whjzjx.cn","pragma":"no-cache","cache-control":"no-cache","sec-ch-ua":"Chromium;v=118, Android","app_version":"2.8.6.1","os_version":"14","authorization":f"{self.cookie}","raw_channel":"default","device_brand":"Redmi","channel":"default","user_agent":"Mozilla/5.0 (Linux; Android 14; 23113RKC6C Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/118.0.0.0 Mobile Safari/537.36 _dsbridge","sec-ch-ua-platform":"Android","device_id":f"{self.deviceid}","sec-ch-ua-mobile":"?1","user-agent":"Mozilla/5.0 (Linux; Android 14; 23113RKC6C Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/118.0.0.0 Mobile Safari/537.36 _dsbridge","content-type":"application/json","accept":"application/json, text/plain, */*","device_type":"23113RKC6C","dev_token":f"{self.devtoken}","device_platform":"android","origin":"https://h5static.xingya.com.cn","x-requested-with":"com.jz.xydj","sec-fetch-site":"cross-site","sec-fetch-mode":"cors","sec-fetch-dest":"empty","accept-encoding":"gzip, deflate, br","accept-language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
 def ex_header(self):
  uuid_str=str(uuid.uuid4())
  self.headers['uuid']="randomUUID_"+uuid_str
 def sign(self):
  self.ex_header()
  url="https://speciesweb.whjzjx.cn/v1/sign/pop-do"
  r=requests.post(url,headers=self.headers).json()
  if r['code']=="ok":
   print(f"💰️签到成功,获得金币:[{r['data']['coin_val']}]")
  else:
   print(f"❌️签到失败,原因:[{r}]")
  time.sleep(3)
  url="https://speciesweb.whjzjx.cn/v1/sign/report"
  data={"type":3}
  r=requests.post(url,headers=self.headers,json=data).json()
  if r['code']=="ok":
   print(f"签到上报成功")
  else:
   print(f"❌️签到上报失败,原因:[{r}]")
 def video(self):
  url="https://speciesweb.whjzjx.cn/v1/sign/incentive_video_task"
  data={"cpm":0}
  r=requests.post(url,headers=self.post_header,json=data).json()
  if r['code']=="ok":
   print(f"💰️观看视频成功,获得金币:[{r['data']['task_coin']}]")
  else:
   print(f"❌️观看视频失败,原因:[{r}]")
  time.sleep(random.randint(15,30))
  url="https://speciesweb.whjzjx.cn/v1/task_ad/claim"
  data={"ad_type":2}
  r=requests.post(url,headers=self.post_header,json=data).json()
  if r['code']=="ok":
   print(f"💰️领取视频额外奖励成功,获得金币:[{r['data']['coin_val']}]")
  else:
   print(f"❌️领取视频额外奖励失败,原因:[{r}]")
 def box(self):
  url="https://speciesweb.whjzjx.cn/v1/box/info"
  r=requests.get(url,headers=self.post_header).json()
  cid=r['data']['config_id']
  if not r['data']['open']:
   print(f"❌️宝箱冷却ing... 下一个宝箱时间:[{r['data']['remain_secs']}]")
   time.sleep(r['data']['remain_secs'])
   time.sleep(random.randint(15,30))
  if not r['data']['show']:
   return
  url="https://speciesweb.whjzjx.cn/v1/box/open"
  data={"config_id":cid,"cpm":0}
  r=requests.post(url,headers=self.post_header,json=data).json()
  if r['code']=="ok":
   coin_val=r['data']['coin_val']
   print(f"💰️打开宝箱成功,获得金币:[{r['data']['coin_val']}]")
  else:
   print(f"❌️打开宝箱失败,原因:[{r}]")
  time.sleep(random.randint(15,30))
  url="https://speciesweb.whjzjx.cn/v1/box/view_ad"
  data={"config_id":cid,"coin_val":coin_val,"ad_num":1}
  r=requests.post(url,headers=self.post_header,json=data).json()
  if r['code']=="ok":
   print(f"💰️宝箱视频一追领取成功,获得金币:[{r['data']['coin_val']}]")
  else:
   print(f"❌️宝箱视频一追领取失败,原因:[{r}]")
  time.sleep(random.randint(15,30))
  data={"config_id":cid,"coin_val":coin_val,"ad_num":2}
  r=requests.post(url,headers=self.post_header,json=data).json()
  if r['code']=="ok":
   print(f"💰️宝箱视频二追领取成功,获得金币:[{r['data']['coin_val']}]")
  else:
   print(f"❌️宝箱视频二追领取失败,原因:[{r}]")
 def red_rain(self):
  url="https://speciesweb.whjzjx.cn/v1/task/red_rain"
  self.ex_header()
  r=requests.get(url,headers=self.headers).json()
  if r['code']=="ok":
   url="https://speciesweb.whjzjx.cn/v1/task/red_rain_prize"
   data={"clicked_red_package_num":r['data']['red_count']}
   r=requests.post(url,headers=self.post_header,json=data).json()
   if r['code']=="ok":
    print(f"🧧领取红包雨奖励成功,获得金币:[{r['data']['coin_val']}]")
   else:
    print(f"❌️领取红包雨奖励失败,原因:[{r}]")
   time.sleep(random.randint(15,30))
   url="https://speciesweb.whjzjx.cn/v1/task_ad/claim"
   data={"ad_type":8}
   r=requests.post(url,headers=self.post_header,json=data).json()
   if r['code']=="ok":
    print(f"💰️领取红包雨额外奖励成功,获得金币:[{r['data']['coin_val']}]")
   else:
    print(f"❌️领取红包雨额外奖励失败,原因:[{r}]")
 def user_info(self):
  url=f"https://speciesweb.whjzjx.cn/v1/sign/info?device_id={self.deviceid}"
  r=requests.get(url,headers=self.post_header).json()
  if r['code']=="ok":
   print(f"💰️当前剩余金币:[{r['data']['species']}]")
   print(f"🎁️当前剩余余额:[{r['data']['cash_remain']}]")
  else:
   print(f"❌️获取用户信息失败,原因:[{r}]")
 def main(self):
  self.sign()
  i=0
  print("======================")
  while True:
   self.video()
   print("======================")
   time.sleep(random.randint(15,30))
   self.box()
   print("======================")
   i+=1
   if i==10:
    break
  print("======================")
  self.red_rain()
  print("======================")
  self.user_info()
if __name__=='__main__':
 cookie=''
 if not cookie:
  cookie=os.getenv("yuanshen_xydj")
  if not cookie:
   print("请设置环境变量:yuanshen_xydj")
   exit()
 cookies=cookie.split("@")
 print(f"一共获取到{len(cookies)}个账号")
 i=1
 for cookie in cookies:
  print(f"\n--------开始第{i}个账号--------")
  main=yuanshen(cookie)
  main.main()
  print(f"--------第{i}个账号执行完毕--------")
  i+=1
