(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{827:function(s,a,t){"use strict";t.r(a);var e={mounted:function(){this.$page.lastUpdated="2022年4月15日"}},n=t(112),_=Object(n.a)(e,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("center",[t("h1",[s._v("EC2 所面临的风险")])]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"_1、凭证泄露"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、凭证泄露"}},[s._v("#")]),s._v(" 1、凭证泄露")]),s._v(" "),t("p",[s._v("云场景下的凭证泄露可以分成以下几种：")]),s._v(" "),t("ul",[t("li",[s._v("控制台账号密码泄露，例如登录控制台的账号密码")]),s._v(" "),t("li",[s._v("临时凭证泄露")]),s._v(" "),t("li",[s._v("访问密钥泄露，即 AccessKeyId、SecretAccessKey 泄露")]),s._v(" "),t("li",[s._v("实例登录凭证泄露，例如 AWS 在创建 EC2 生成的证书文件遭到泄露")])]),s._v(" "),t("p",[s._v("对于这类凭证信息的收集，一般可以通过以下几种方法进行收集：")]),s._v(" "),t("ul",[t("li",[s._v("Github 敏感信息搜索")]),s._v(" "),t("li",[s._v("反编译目标 APK、小程序")]),s._v(" "),t("li",[s._v("目标网站源代码泄露")])]),s._v(" "),t("h2",{attrs:{id:"_2、元数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、元数据"}},[s._v("#")]),s._v(" 2、元数据")]),s._v(" "),t("p",[s._v("元数据服务是一种提供查询运行中的实例内元数据的服务，当实例向元数据服务发起请求时，该请求不会通过网络传输，如果获得了目标 EC2 权限或者目标 EC2 存在 SSRF 漏洞，就可以获得到实例的元数据。")]),s._v(" "),t("p",[s._v("在云场景下可以通过元数据进行临时凭证和其他信息的收集，在 AWS 下的元数据地址为：http://169.254.169.254/latest/meta-data/，直接 curl 请求该地址即可。")]),s._v(" "),t("p",[s._v("通过元数据，攻击者除了可以获得 EC2 上的一些属性信息之外，有时还可以获得与该实例绑定角色的临时凭证，并通过该临时凭证获得云服务器的控制台权限，进而横向到其他机器。")]),s._v(" "),t("p",[s._v("通过访问元数据的 "),t("code",[s._v("/iam/security-credentials/<rolename>")]),s._v(" 路径可以获得目标的临时凭证，进而接管目标服务器控制台账号权限，前提是目标需要配置 IAM 角色才行，不然访问会 404")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" http://169.254.169.254/latest/meta-data/iam/security-credentials\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("img",{attrs:{width:"900",src:"/img/1649996601.png"}}),s._v(" "),t("p",[s._v("通过元数据获得目标的临时凭证后，就可以接管目标账号权限了，这里介绍一些对于 RT 而言价值相对较高的元数据：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mac    实例 MAC 地址\nhostname    实例主机名\niam/info    获取角色名称\nlocal-ipv4    实例本地 IP\npublic-ipv4    实例公网 IP\ninstance-id    实例 ID\npublic-hostname    接口的公有 DNS (IPv4)\nplacement/region    实例的 AWS 区域\npublic-keys/0/openssh-key    公有密钥\n/iam/security-credentials/<rolename>    获取角色的临时凭证\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"_3、账号劫持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、账号劫持"}},[s._v("#")]),s._v(" 3、账号劫持")]),s._v(" "),t("p",[s._v("如果云厂商的控制台存在漏洞的话，用户账号也会存在一定的风险。")]),s._v(" "),t("p",[s._v("例如 AWS 的控制台曾经出现过一些 XSS 漏洞，攻击者就可能会使用这些 XSS 漏洞进行账号劫持，从而获得目标云服务器实例的权限。")]),s._v(" "),t("h2",{attrs:{id:"_4、恶意的镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、恶意的镜像"}},[s._v("#")]),s._v(" 4、恶意的镜像")]),s._v(" "),t("p",[s._v("AWS 在创建实例的时候，用户可以选择使用公共镜像或者自定义镜像，如果这些镜像中有恶意的镜像，那么目标使用该镜像创建实例就会产生风险。")]),s._v(" "),t("p",[s._v("以 CVE-2018-15869 为例，关于该漏洞的解释是：当人们通过 AWS 命令行使用「ec2 describe-images」功能时如果没有指定 --owners 参数，可能会在无意中加载恶意的 Amazon 系统镜像 ( AMI），导致 EC2 被用来挖矿。")]),s._v(" "),t("p",[s._v("对此，在使用 AWS 命令行时应该确保自己使用的是不是最新版的 AWS 命令行，同时确保从可信的来源去获取 Amazon 系统镜像。")]),s._v(" "),t("h2",{attrs:{id:"_5、其他的初始访问方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、其他的初始访问方法"}},[s._v("#")]),s._v(" 5、其他的初始访问方法")]),s._v(" "),t("p",[s._v("除了以上云场景下的方法外，还可以通过云服务上的应用程序漏洞、SSH 与 RDP 的弱密码等传统场景下的方法进入目标实例。")]),s._v(" "),t("blockquote",[t("p",[s._v("参考资料：")]),s._v(" "),t("p",[s._v("https://cloud.tencent.com/developer/article/1931560")]),s._v(" "),t("p",[s._v("https://summitroute.com/blog/2018/09/24/investigating_malicious_amis/")]),s._v(" "),t("p",[s._v("https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/instancedata-data-categories.html")])]),s._v(" "),t("Vssue")],1)}),[],!1,null,null,null);a.default=_.exports}}]);