---
# This is the icon of the page
icon: iconfont icon-state
# This control sidebar order
order: 21
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
  - "302"
  - Official
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
headerDepth: 5
---

# 115 Open

::: tip

Developed using the official [**115 Open Platform API**](https://open.115.com)

:::

::: danger Please read the precautions carefully

Please use your account in a standardized manner. Do not use it for distribution services including but not limited to **`multi-person sharing`**, **`image hosting, software hosting`** and **`video external links to video websites for playback`**, as well as some other irregular uses not mentioned above. You will be responsible for the consequences of your account being blocked.

:::

<br/>



## **Get refresh token**

- **https://alist.iots.vip/tool/115/token**

Scan the QR code with your phone and click the blue button to get `refresh token`

When filling in the drive information, you only need to fill in **`refresh token`**, and you don’t need to fill in `access token`

![](/img/drivers/115/115_b.png#light)
![](/img/drivers/115/115_h.png#dark)

<br/>



### **Precautions**

::: warning Token leakage post-processing method

If you accidentally leak the Token, you can go to 115 Device Login Management to deauthorize the app.

- 115 APP：【**iOS**、**Android**】 version requires ≥ 35.11.0
- 115 Web：**https://115.com/?mode=device_manage**

After invalidation, the following content will be displayed:

```json
failed get objs: failed to list objs: code: 40140116, message: no auth
```

An account can obtain `Refresh token` twice from the same application. After the third acquisition, the `Refresh token` obtained first will become invalid. Using the first `Refresh token` will prompt the above error.

![](/img/drivers/115/115_auth_b.png#light)
![](/img/drivers/115/115_auth_h.png#dark)

:::



### **Get a refresh token using another APP ID**

For example, use your own developer application ID to obtain a refresh token. Before obtaining a refresh token, fill in the application`APP ID` and then click the Get Refresh Token button.

![](/img/drivers/115/115_b_t.png#light)
![](/img/drivers/115/115_h_t.png#dark)



<br/>

## **Root folder ID**

Open the official website of 115 Cloud and click the string behind the url when you click into the folder you want to set, 

such as <https://115.com/?cid=249163533602609229&offset=0&tab=&mode=wangpan>, 

which is `249163533602609229`



<br/>

### **The default download method used**

```mermaid
---
title: Which download method is used by default?
---
flowchart TB
    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff
    style a2 fill:#ff7575,stroke:#333,stroke-width:4px
    subgraph ide1 [ ]
    a1
    end
    a1[302]:::someclass====|default|a2[user equipment]
    classDef someclass fill:#f96
    c1[local proxy]-.alternative.->a2[user equipment]
    b1[Download proxy URL]-.alternative.->a2[user equipment]
    click a1 "../drivers/common.html#webdav-policy"
    click b1 "../drivers/common.html#webdav-policy"
    click c1 "../drivers/common.html#webdav-policy"
```
