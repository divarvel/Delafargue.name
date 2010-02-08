def link(href, title, className="", lang=""):
  if(lang != ""):
      lang = 'hreflang="%s"' % lang
  if(className != ""):
      className = 'class="%s"' % className
  return '<a href="%s" %s %s >%s</a>' % (href, lang, className, title)

def img(src, alt, className=""):
  if(className != ""):
      className = 'class="%s"' % className
  return '<img src="%s" alt="%s" %s />' %(src, alt, className)
