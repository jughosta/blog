module.exports = {
  getMediumPostSlug({ link, pubDate }) {
    const linkPart = link.match(/\/([^\/?]+)\?/);
    const date = new Date(pubDate);
    return `/${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${linkPart[1]}/`;
  },
  formatDate(date) {
    return (new Date(date)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
};
