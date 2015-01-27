anti-hijack-list
================

通过劫持 ISP 用于劫持流量的域名来绕过 ISP 的流量劫持。

由于第一次跳转所用的域名列表经常变化，某些广告联盟的域名也在此列表中。

内容
====

- `dnsmasq/hijack.conf` DNSMasq 的域名解析规则

如果您的局域网内有可以运行 nginx 的服务器，请把 `155.254.49.43` 替换为您服务器的 IP 地址。

- `htdocs` 用于跳转回正常网站的网页

- `nginx` nginx 的配置文件

- `routeros/hijack.conf` 用于在 RouterOS 上重定向劫持所用 IP 的规则

如果您的局域网内有可以运行 nginx 的服务器，请把 `155.254.49.43` 替换为您服务器的 IP 地址。

使用
====

1. 将 `dnsmasq/hijack.conf` 放置于您安装 DNSMasq 服务器的 `/etc/dnsmasq.d` 目录下，并重启 DNSMasq

(可选)

2. 将 `htdocs` 里的内容放置于您的 nginx 服务器的 `/var/www/anti-hijack` 目录下（如果不存在，请用 `mkdir -p` 创建）

3. 将 `nginx/hijack.conf` 复制到您 nginx 服务器的 `/etc/nginx/sites-enabled` 或 `/etc/nginx/conf.d` 目录下，并重启 nginx

4. 把 `dnsmasq/hijack.conf` 里的 `155.254.49.43` 替换为您 nginx 服务器的 IP 地址。

已知问题
========

1. 爱衣趣的脚本有由 ISP 劫持插入的，也有商家自主加入的，由商家自主插入的页面（如一号店的购物车页面）会重载 5 次。

许可
====

```
Copyright © 2013 Aveline Swan <i@xswan.net>
This work is free. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See the LICENSE file for more details.
```

