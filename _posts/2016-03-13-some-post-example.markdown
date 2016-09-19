---
layout: post
title:  "code highlighting checking"
date:   2016-03-13 22:37:06 +0100
categories: jekyll update
---
UGA BUGA
Today we will learn about excerpts in jekyll
<!--more-->

This is just a simple content 

{% highlight java linenos=table %}
@Slf4j
class SomeGoodClass {

    public void thisIsANiceMethod(Observable<Object> something) {
    
        something.subscribe(log::inf)
    }
}
{% endhighlight %}

