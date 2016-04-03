---
layout: post
title:  "Some post example"
date:   2016-03-13 22:37:06 +0100
categories: jekyll update
---
This is just a simple content 

{% highlight java %}
@Slf4j
class SomeGoodClass {

    public void thisIsANiceMethod(Observable<Object> something) {
    
        something.subscribe(log::inf)
    }
}
{% endhighlight %}

