<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <xsl:output method="html" encoding="UTF-8" indent="yes" doctype-public="-//W3C//DTD HTML 4.01//EN"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="robots" content="noindex, follow"/>
        <title>XML Sitemap &#8212; The Brick | thebrick.com.ng</title>
        <style type="text/css">
          * { margin:0; padding:0; box-sizing:border-box; }

          body {
            font-family: 'Segoe UI', Arial, sans-serif;
            background: #111;
            color: #ddd;
            min-height: 100vh;
          }

          header {
            background: #1c1c1c;
            border-bottom: 2px solid #c9a96e;
            padding: 28px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .brand { font-size: 26px; font-weight: 700; letter-spacing: 0.12em; color: #fff; }
          .brand em { color: #c9a96e; font-style: normal; }
          .sub { font-size: 12px; color: #777; margin-top: 4px; letter-spacing: 0.06em; }

          .badge { background: #1a2e1a; color: #4ade80; border: 1px solid #2d4a2d;
                   border-radius: 6px; padding: 10px 20px; text-align: center; }
          .badge-num { font-size: 30px; font-weight: 700; color: #c9a96e; line-height: 1; }
          .badge-lbl { font-size: 10px; color: #777; text-transform: uppercase;
                       letter-spacing: 0.12em; margin-top: 3px; }

          .notice {
            background: #1a2a1a;
            border: 1px solid #2d4a2d;
            border-left: 4px solid #4ade80;
            margin: 24px 40px;
            padding: 14px 20px;
            border-radius: 4px;
            font-size: 13px;
            color: #aaa;
            line-height: 1.6;
          }
          .notice strong { color: #4ade80; }

          main { padding: 0 40px 40px; }

          .section-label {
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: #c9a96e;
            margin: 28px 0 12px;
            padding-bottom: 8px;
            border-bottom: 1px solid #222;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            background: #1a1a1a;
            border-radius: 6px;
            overflow: hidden;
            font-size: 13px;
          }

          thead { background: #222; }
          thead th {
            padding: 11px 14px;
            text-align: left;
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: #666;
          }

          tbody tr { border-top: 1px solid #222; }
          tbody tr:hover { background: #1f1f1f; }

          td { padding: 13px 14px; vertical-align: middle; }

          td.num { color: #444; font-size: 11px; width: 36px; text-align: center; }

          td a { color: #93b4f5; text-decoration: none; word-break: break-all; }
          td a:hover { color: #c9a96e; text-decoration: underline; }

          .chip {
            display: inline-block;
            padding: 3px 9px;
            border-radius: 12px;
            font-size: 11px;
            font-weight: 600;
            white-space: nowrap;
          }
          .chip-green  { background: #142b14; color: #4ade80; border: 1px solid #1e4a1e; }
          .chip-gold   { background: #2b2014; color: #c9a96e; border: 1px solid #4a3a1e; }
          .chip-grey   { background: #1e1e1e; color: #666;    border: 1px solid #2a2a2a; }

          .freq { font-size: 11px; color: #555; text-transform: capitalize; }
          .date { font-size: 11px; color: #444; white-space: nowrap; }

          footer {
            text-align: center;
            padding: 28px;
            font-size: 12px;
            color: #444;
            border-top: 1px solid #1a1a1a;
            margin-top: 20px;
          }
          footer a { color: #c9a96e; text-decoration: none; }
        </style>
      </head>
      <body>

        <header>
          <div>
            <div class="brand">THE<em>BRICK</em></div>
            <div class="sub">www.thebrick.com.ng &#8212; XML Sitemap for Google</div>
          </div>
          <div class="badge">
            <div class="badge-num"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></div>
            <div class="badge-lbl">URLs Indexed</div>
          </div>
        </header>

        <div class="notice">
          <strong>&#10003; Google-Ready:</strong>
          This sitemap is fully valid XML that Google reads directly.
          Submit it in Google Search Console at:
          <strong>https://www.thebrick.com.ng/sitemap.xml</strong>
          &#8212; The styled view you see here is for humans only; Googlebot reads the raw XML.
        </div>

        <main>
          <div class="section-label">All Pages &#8212; Sorted by Priority</div>

          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>URL</th>
                <th>Priority</th>
                <th>Crawl Frequency</th>
                <th>Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td class="num"><xsl:value-of select="position()"/></td>
                  <td>
                    <a href="{sitemap:loc}" target="_blank" rel="noopener noreferrer">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <xsl:choose>
                      <xsl:when test="sitemap:priority >= 0.9">
                        <span class="chip chip-green"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:when>
                      <xsl:when test="sitemap:priority >= 0.7">
                        <span class="chip chip-gold"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:when>
                      <xsl:otherwise>
                        <span class="chip chip-grey"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:otherwise>
                    </xsl:choose>
                  </td>
                  <td><span class="freq"><xsl:value-of select="sitemap:changefreq"/></span></td>
                  <td><span class="date"><xsl:value-of select="sitemap:lastmod"/></span></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </main>

        <footer>
          <a href="https://www.thebrick.com.ng" target="_blank">www.thebrick.com.ng</a>
          &#160;&#8212;&#160;
          Submit sitemap at
          <a href="https://search.google.com/search-console" target="_blank">Google Search Console</a>
        </footer>

      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
