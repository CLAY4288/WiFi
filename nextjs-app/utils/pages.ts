type Page = {
  url: string;
  timestamp: Date;
};

const VIEW_PAGE = "VIEW_PAGE";

function viewPage(page: Page) {
  console.log(`${VIEW_PAGE}: ${page.url} at ${page.timestamp}`);
}

export { Page, VIEW_PAGE, viewPage };