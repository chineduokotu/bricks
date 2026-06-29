<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Sitemap — BRICKS Furniture | thebrick.com.ng</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }

          body {
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            background: #0f0f0f;
            color: #e5e5e5;
            min-height: 100vh;
          }

          header {
            background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
            border-bottom: 1px solid #333;
            padding: 32px 40px;
            display: flex;
            align-items: center;
            gap: 20px;
          }

          .brand {
            font-size: 28px;
            font-weight: 700;
            letter-spacing: 0.15em;
            color: #ffffff;
          }

          .brand span {
            color: #c9a96e;
          }

          .tagline {
            font-size: 13px;
            color: #888;
            letter-spacing: 0.05em;
            margin-top: 4px;
          }

          .divider { flex: 1; }

          .stats {
            text-align: right;
          }

          .stats .count {
            font-size: 32px;
            font-weight: 700;
            color: #c9a96e;
            line-height: 1;
          }

          .stats .label {
            font-size: 11px;
            color: #666;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            margin-top: 4px;
          }

          main {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 24px;
          }

          .section-title {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: #c9a96e;
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 1px solid #222;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 40px;
            background: #1a1a1a;
            border-radius: 8px;
            overflow: hidden;
          }

          thead tr {
            background: #222;
          }

          thead th {
            padding: 12px 16px;
            text-align: left;
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: #888;
          }

          tbody tr {
            border-top: 1px solid #222;
            transition: background 0.15s ease;
          }

          tbody tr:hover {
            background: #222;
          }

          td {
            padding: 14px 16px;
            font-size: 13px;
            vertical-align: middle;
          }

          td a {
            color: #a8c7fa;
            text-decoration: none;
            word-break: break-all;
            line-height: 1.5;
          }

          td a:hover {
            color: #c9a96e;
            text-decoration: underline;
          }

          .priority {
            display: inline-block;
            padding: 3px 10px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 600;
          }

          .p-high   { background: #1a3320; color: #4ade80; }
          .p-med    { background: #1e2a1a; color: #86efac; }
          .p-low    { background: #1a1f1a; color: #6b7280; }

          .freq {
            font-size: 11px;
            color: #666;
            text-transform: capitalize;
          }

          .date {
            font-size: 11px;
            color: #555;
            white-space: nowrap;
          }

          footer {
            text-align: center;
            padding: 32px;
            font-size: 12px;
            color: #444;
            border-top: 1px solid #1a1a1a;
          }

          footer a { color: #c9a96e; text-decoration: none; }
        </style>
      </head>
      <body>
        <header>
          <div>
            <div class="brand">THE<span>BRICK</span></div>
            <div class="tagline">www.thebrick.com.ng — XML Sitemap</div>
          </div>
          <div class="divider"/>
          <div class="stats">
            <div class="count"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></div>
            <div class="label">Total URLs Indexed</div>
          </div>
        </header>

        <main>
          <div class="section-title">All Indexed Pages</div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>URL</th>
                <th>Priority</th>
                <th>Change Freq</th>
                <th>Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <xsl:sort select="sitemap:priority" order="descending" data-type="number"/>
                <tr>
                  <td style="color:#555; font-size:11px; width:40px;">
                    <xsl:value-of select="position()"/>
                  </td>
                  <td>
                    <a href="{sitemap:loc}" target="_blank" rel="noopener">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <xsl:variable name="p" select="sitemap:priority"/>
                    <xsl:choose>
                      <xsl:when test="$p >= 0.9">
                        <span class="priority p-high"><xsl:value-of select="$p"/></span>
                      </xsl:when>
                      <xsl:when test="$p >= 0.7">
                        <span class="priority p-med"><xsl:value-of select="$p"/></span>
                      </xsl:when>
                      <xsl:otherwise>
                        <span class="priority p-low"><xsl:value-of select="$p"/></span>
                      </xsl:otherwise>
                    </xsl:choose>
                  </td>
                  <td>
                    <span class="freq"><xsl:value-of select="sitemap:changefreq"/></span>
                  </td>
                  <td>
                    <span class="date"><xsl:value-of select="sitemap:lastmod"/></span>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </main>

        <footer>
          Generated for <a href="https://www.thebrick.com.ng" target="_blank">www.thebrick.com.ng</a>
          — Submit this sitemap in
          <a href="https://search.google.com/search-console" target="_blank">Google Search Console</a>
          to accelerate indexing.
        </footer>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
