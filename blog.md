# Eleventy x NetlifyCMS (incl. previews)

## Intro

Eleventy is starting to become my favourite static site generator (SSG). It's very simple, yet really powerful. If you haven't checked it out already, I'd strongly suggest to do so, this blog post is not exclusively targeted at eleventy users, the patterns to include previews can be adopted in other SSGs as well. 

A big pain point with SSGs is making content on the site editable for a non-developer. In comes [Netlify CMS](https://www.netlifycms.org/) a Git based CMS. 

## Install Netlify CMS

To install Netlify CMS in your git repo, have a look at the [Netlify CMS docs](https://www.netlifycms.org/docs/add-to-your-site/).
We'll assume that you have added a `admin` folder to your 11ty project and continue from there on.

## Netlify CMS config

Let's create a "home" page which will be editable from the CMS. To do that we'll add a new collection named `pages` with a the home page, this will look something like this:
```yaml
...
collections
  - name: pages
    label: Pages
    files:
      - label: 'Home Page'
        name: home
        file: {{your eleveny root}}/index.md
        fields:
          - { label: Layout, name: layout, widget: hidden, default: home.liquid }
          - { label: Title, name: title, widget: string }
          - { label: Intro, name: intro, widget: markdown }
          - { label: Body, name: body, widget: markdown }
          - { label: Photo, name: photo, widget: image }
...
``` 
As you can see we configured the home page to use the `home.liquid` layout by default. So let's create this layout: 
```html
{% layout 'layouts/base.liquid' %}

{% block content %}
<img src="{{ photo }}" alt="{{ title }}" width="400px" />
<h1>{{ title }}</h1>
<div>{{ intro | markdown }}</div>
{% endblock %}
```
This 