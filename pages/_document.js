import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="dark">
        <Head />
        <body className="font-inter antialiased bg-gray-900 text-gray-200 tracking-tight ring-orange-500">
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
