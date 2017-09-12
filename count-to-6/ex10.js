console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(strings, ...interpolated) {
  let result = strings[0];
  interpolated.forEach((htmlUnsafe, i) => {
    const htmlSafe = htmlUnsafe
      .replace(/&/g, '&amp;')
      .replace(/'/g, '&apos;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    result += htmlSafe + strings[i+1];
  });
  return result;
}
