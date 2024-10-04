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
                    color: #721c24;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .container {
                    text-align: center;
                    padding: 20px;
                    border: 1px solid #f5c6cb;
                    background-color: #f8d7da;
                    border-radius: 10px;
                }
                h1 {
                    font-size: 50px;
                    margin-bottom: 20px;
                }
                p {
                    font-size: 20px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>410 Gone</h1>
                <p>The resource you are looking for has been permanently removed.</p>
            </div>
        </body>
        </html>
    `;

    // HTMLをレスポンスとして送信
    response.status(410).send(htmlContent);
    return;
};
