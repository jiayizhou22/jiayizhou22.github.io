---
layout: default
title: Blog
permalink: /blog/
---


<style>
    .page-title {
        font-size: 1.875rem;
        font-weight: 700;
        margin: 0 0 2.5rem 0;
    }

    .post-list {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding-left: 20px; /* 控制左边留白 */
    }

    .post-row {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .post-date {
        width: 8rem;
        flex-shrink: 0;
        color: var(--muted-text-color);
        font-weight: 600;
    }

    .post-main {
        flex: 1;
    }

    .post-title-link {
        display: inline-block;
        font-size: 1.125rem;
        font-weight: 600;
        text-decoration: none;
        color: var(--text-color);
        transition: color 0.2s;
    }

    .post-title-link:hover {
        color: var(--link-hover-color);
    }


    .post-desc {
        margin: 0.25rem 0 0 0;
        color: var(--muted-text-color);
        font-size: 0.875rem;
        line-height: 1.6;
    }


    @media (min-width: 640px) {
        .post-row {
            flex-direction: row;
            align-items: flex-start;
            gap: 1.5rem;
        }
    }
</style>


## Blog

<div class="post-list">
    {% for post in site.posts %}
    <div class="post-row">
        <div class="post-date">
            {{ post.date | date: "%b %-d, %Y" }}
        </div>
        <div class="post-main">
            <a class="post-title-link text-accent" href="{{ post.url | relative_url }}">
                {{ post.title }}
            </a>
            {% if post.description %}
            <p class="post-desc">{{ post.description }}</p>
            {% endif %}
        </div>
    </div>
    {% endfor %}
</div>