const commentHeading = "Migration file detected for PR number: ";
const pr_number = context.issue.number;
let filenames = [];

function commentCreator(filenames, pr_number) {
  github.rest.issues.createComment({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo,
    body: `${filenames} ${commentHeading} ${pr_number}
          Please have a look from django [migrations](https://phab.instamojo.com/w/engineering/best_practices_for_django_migrations/) best practice on this link. `
  });
}

function commentDeleter(comment_id) {
  github.rest.issues.deleteComment({
    owner: context.repo.owner,
    repo: context.repo.repo,
    comment_id: `${comment_id}`,
  });
}

function getPullRequestComments() {
  return github.rest.issues.listComments({
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: context.issue.number,
  });
}

async function checkComments(all_comments) {
  const format_all_comments = await github.paginate(all_comments);
  for (const comment of format_all_comments) {
    let comment_body = comment.body;
    if (comment_body.includes(`${commentHeading} ${pr_number}`)) {
      return String(comment.url);
    } else {
      return false;
    }
  }
}

async function listAllPullRequestFiles() {
  return await github.rest.pulls.listFiles({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.issue.number,
  });
}
const pulls = await listAllPullRequestFiles();
const issues = await github.paginate(pulls);
for (const issue of issues) {
  let filename = String(issue.filename);
  if (filename.includes("migrations")) {
    filenames.push(filename);
  }
}
const all_comments = await getPullRequestComments();
const migration_comment_available = await checkComments(all_comments);

if (filenames && typeof migration_comment_available === "boolean") {
  commentCreator(filenames, pr_number);
} else if (typeof migration_comment_available === "string") {
  let comment_id = parseInt(migration_comment_available.split("/").pop());
  commentDeleter(comment_id);
}
