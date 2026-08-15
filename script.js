/* =========================================
   个人博客 JavaScript
========================================= */


/* =========================================
   1. 手机端导航菜单
========================================= */

// 获取菜单按钮
const menuToggle = document.querySelector("#menuToggle");

// 获取导航栏
const nav = document.querySelector("#nav");


// 点击菜单按钮
menuToggle.addEventListener("click", function () {

    // 给导航栏添加 / 删除 active
    nav.classList.toggle("active");

});



/* =========================================
   2. 点击导航链接后关闭手机菜单
========================================= */

const navLinks = document.querySelectorAll(".nav a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

    });

});



/* =========================================
   3. 深色 / 浅色模式
========================================= */

const themeToggle =
    document.querySelector("#themeToggle");


// 检查浏览器之前有没有保存主题
const savedTheme =
    localStorage.getItem("theme");


// 如果之前保存的是 dark
if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☀️";

}


// 点击主题按钮
themeToggle.addEventListener("click", function () {

    // 切换 dark class
    document.body.classList.toggle("dark");


    // 判断当前是不是深色模式
    const isDark =
        document.body.classList.contains("dark");


    // 保存主题
    if (isDark) {

        localStorage.setItem("theme", "dark");

        themeToggle.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "light");

        themeToggle.textContent = "🌙";

    }

});



/* =========================================
   4. 文章搜索功能
========================================= */

// 获取搜索框
const searchInput =
    document.querySelector("#searchInput");

// 获取所有文章
const posts =
    document.querySelectorAll(".post-card");


searchInput.addEventListener("input", function () {

    // 获取用户输入
    const keyword =
        searchInput.value
            .toLowerCase()
            .trim();


    // 遍历所有文章
    posts.forEach(function (post) {

        const title =
            post.dataset.title.toLowerCase();

        const category =
            post.dataset.category.toLowerCase();

        // 判断标题或分类是否包含关键词
        if (
            title.includes(keyword) ||
            category.includes(keyword)
        ) {

            post.style.display = "";

        } else {

            post.style.display = "none";

        }

    });

});



/* =========================================
   5. 文章分类筛选
========================================= */

// 获取所有分类按钮
const categoryButtons =
    document.querySelectorAll(".category-button");


categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // 获取当前分类
        const selectedCategory =
            button.dataset.category;


        // 修改按钮状态
        categoryButtons.forEach(function (item) {

            item.classList.remove("active");

        });

        button.classList.add("active");


        // 显示 / 隐藏文章
        posts.forEach(function (post) {

            const postCategory =
                post.dataset.category;


            // 如果选择全部
            if (selectedCategory === "全部") {

                post.style.display = "";

            }

            // 如果文章属于当前分类
            else if (
                postCategory === selectedCategory
            ) {

                post.style.display = "";

            }

            // 其他文章隐藏
            else {

                post.style.display = "none";

            }

        });

    });

});
