import { NowRequest, NowResponse } from "@vercel/node";

export default async (
    request: NowRequest,
    response: NowResponse
): Promise<void> => {
    response.setHeader("cache-control", "s-maxage=31536000");
    response.setHeader("Content-Type", "text/html");  // HTMLを返すためのContent-Typeを指定

    // HTMLとCSSを組み込んだレスポンス
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="ja">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>410 Gone</title>
            <style>
                body {
                    background-color: #efefef;
                    color: #161209;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .container {
                    padding: 20px;
                }
                h1 {
                    font-size: 1.4em;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 1em;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>みるくちょこ.ink 跡地（410 Gone）</h1>
                <p>誠に勝手ながら『みるくちょこ.ink』は閉鎖いたしました。<br />
身体的およびメンタルの不調により、今後サーバーの維持が困難になる可能性が高く、予期せぬトラブルを避けるため、このような決断をいたしました。<br />

調子が戻りましたら、いつかどこかで復活するかもしれません。<br />
その際はよろしくお願いいたします。<br />

長らくのお付き合い、誠にありがとうございました。</p>
            </div>
        </body>
        </html>
    `;

    // HTMLをレスポンスとして送信
    response.status(410).send(htmlContent);
    return;
};
