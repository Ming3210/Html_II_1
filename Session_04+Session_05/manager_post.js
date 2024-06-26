let postList = [];

let MAXPOST = 5;

function post(title,content,author) {
    {
        this.title = title;
        this.content = content;
        this.author = author;
    }
}


export function createPost(title, content, author) {
    if (postList.length < MAXPOST-1) {
        let newPost = new post(title, content, author);
        postList = [...postList, newPost];
    } else {
        console.log("Danh sách bài viết đã đầy. Không thể thêm bài viết mới.");
    }
}

export function print() {
    for (const post of postList) {
        console.log("Title:", post.title);
        console.log("Content:", post.content);
        console.log("Author:", post.author);
        console.log("-----------------------------");
    }
}


export function searchPost(findItem) {
    const searchResult = postList.filter(post => 
        post.title.includes(findItem) || 
        post.content.includes(findItem) || 
        post.author.includes(findItem)
    );

    if (searchResult.length > 0) {
        console.log("Kết quả tìm kiếm:");
        for (const post of searchResult) {
            console.log("Title:", post.title);
            console.log("Content:", post.content);
            console.log("Author:", post.author);
            console.log("-----------------------------");
        }
    } else {
        console.log("Không tìm thấy kết quả nào phù hợp.");
    }
}


createPost("Tiêu đề 1", "Nội dung 1", "Tác giả 1");
createPost("Tiêu đề 2", "Nội dung 2", "Tác giả 2");
createPost("Tiêu đề 3", "Nội dung 3", "Tác giả 3");
createPost("Tiêu đề 3", "Nội dung 3", "Tác giả 3");
createPost("Tiêu đề 3", "Nội dung 3", "Tác giả 3");
createPost("Tiêu đề 3", "Nội dung 3", "Tác giả 3");

print();

searchPost("Tiêu đề 2");