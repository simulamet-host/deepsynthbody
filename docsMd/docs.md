# How to contribute to DeepSynthBody


DeepSynthBody is an open source project, so all contributions, feedbacks and suggestions are welcome.  You can contribute through pull requests on the [Github repository](https://github.com/simulamet-host/deepsynthbody) or through the [feedback form](https://deepsynthbody.org/form/) on the website.

## 1.How to contribute via pull request(PR)?

* First, fork the repository to your own GitHub account. This will create a copy of the repository that you can modify and submit changes to.

* Clone the repository to your local machine. This will allow you to make changes to the repository and push them back to your fork.

* Add you contributions and describe the contribution you'd like to make before submitting any code.

* Commit your changes and push them to your fork.

* On the original repository, create a new pull request to merge your changes (i.e. the added dataset) into the main branch.

* Provide a brief description of your changes and the dataset you are adding.

* Wait for the maintainers of the repository to review your pull request. They may ask for additional information or make suggestions for changes before merging it into the main branch.

## 2.How to add a dateset?

The [MDFiles](https://github.com/simulamet-host/deepsynthbody/tree/main/MdFiles) folder can be used to add datasets by adding markdown files. Markdown files should have front-matter in order to add more complex data.  Front-matter has to be on the top of the file and begins and ends with three dashes ---. 

<img src="/docsImages/frontmatter2.png" width="800" />
<img src="/docsImages/frontmatter.png" width="800" />

* *title*: To insert the title of the dataset.
* *category*: Specify a category that the dataset belogs to.
* *subcategory* : An optional front matter variable, that can use if the category has subcategory.
* *subsubcategory* : An optional front matter variable for categories with subcategories of subcategories.
* *desc* : In this variable, you can provide a short description of the dataset.
* *thumbnail*:  To insert a image link or image file path.
* *publication*: To insert a publication link.
* *show*: Takes a boolean value. Set to false if you don’t want a specific post to show up when the site is generated.

**Images** related to models can be uploaded to the image folders belogning to the categories under the public file.(i.e [public/cardioImages/](https://github.com/simulamet-host/deepsynthbody/tree/main/public)) 

## 3.How to add categories and subcategories?

To add a category, it is sufficient to add the new category name to the front matter variable of the md document inside the MdFiles folder where you add the model. It is valid for subcategories and subcategory of subcategories as well.

<img src="/docsImages/categoryFrontmatter.png" width="800" />

**Images** related to categories can be written to the md file under the CategoryImages [CategoryImages/categoryImages.md](https://github.com/simulamet-host/deepsynthbody/blob/main/CategoryImages/categoryImages.md) and category images can be uploaded to the [public/imagesOfCategories](https://github.com/simulamet-host/deepsynthbody/tree/main/public/imagesOfCategories/icons%20with%20circle).

#### Subcategories of the model categories

* Seperate headings for subcategories can be written in the front matter of the file [HeadingOrDesc/subcategory/subCategoryHeadings.md](https://github.com/simulamet-host/deepsynthbody/blob/main/HeadingOrDesc/subcategory/subCategoryHeadings.md). 
<img src="/docsImages/headingsordesc.png" width="800" />

* Seperate descriptions for each subcategories can be written in the front matter of the file [HeadingOrDesc/subcategory/subCategoryDesc.md](https://github.com/simulamet-host/deepsynthbody/blob/main/HeadingOrDesc/subcategory/subCategoryDesc.md). 
* A description of the search bar can be placed at the top of the page for each subcategory by writing in the front matter of the file [HeadingOrDesc/subcategory/search.md.](https://github.com/simulamet-host/deepsynthbody/blob/main/HeadingOrDesc/subcategory/search.md).
* Model description for each subcategory can be written in the front matter of the file [HeadingOrDesc/subcategory/modelDesc.md](https://github.com/simulamet-host/deepsynthbody/blob/main/HeadingOrDesc/subcategory/modelsDesc.md). 
* Model headings for each subcategory can be written in the front matter of the file [HeadingOrDesc/subcategory/modelsHeadings.md](https://github.com/simulamet-host/deepsynthbody/blob/main/HeadingOrDesc/subcategory/modelsHeadings.md). 

The same file structure is valid for 2nd level subcategories and 3rd level subcategories.
* [HeadingOrDesc/subsubcategory/](https://github.com/simulamet-host/deepsynthbody/tree/main/HeadingOrDesc/subsubcategory)
* [HeadingOrDesc/thirdLevelOfCategories/](https://github.com/simulamet-host/deepsynthbody/tree/main/HeadingOrDesc/thirdLevelOfCategories)

## 3.How to change data on slider, footer and home page?

**Slider** is a element that displays a series of images, button, description on the top of the home page. You can add slider content with a md file within the [sliderFiles](https://github.com/simulamet-host/deepsynthbody/tree/main/sliderFiles) directory.
<img src="/docsImages/slider.png" width="800" />

* *buttonName*: To insert a link that goes to the link when the button is clicked.
* *thumbnail*: To insert a image link or image file path.
* *link*: To insert an external link.
* *description*: To provide a description.
* *show*: Takes a boolean value. Set to false if you don’t want a specific post to show up when the site is generated.

**Footer** is the element that displays on the bottom of the home page. Footer content can be changed from  [HeadingOrDesc/home.md](https://github.com/simulamet-host/deepsynthbody/blob/main/HeadingOrDesc/home.md) file, `footer` variable of the front matter.
<img src="/docsImages/homemd.png" width="800" />

**Search Heading** is the title on top of the search bar. Home pages search heading can be chagned from [HeadingOrDesc/home.md](https://github.com/simulamet-host/deepsynthbody/blob/main/HeadingOrDesc/home.md) file, `SearchHeading` variable of the front matter.

## 4.How to add content to the about, docs, and news page?

* **About page** content is in the [about/about.md](https://github.com/simulamet-host/deepsynthbody/tree/main/about) file.
* **Docs page** content is in the [docsMd/docs.md](https://github.com/simulamet-host/deepsynthbody) file.

* **How to add news to the news page?**    
To add a news, please add a new md file under the [newsMd](https://github.com/simulamet-host/deepsynthbody/tree/main/newsMd) folder. And insert the front matter variables below.

<img src="/docsImages/newsmd.png" width="800" />

* *title*: To insert the title of the news.
* *image*: To insert a image link or image file path.
* *link*: The external link of the news.
* *description* : To provide a shortdescription of the news.
* *category*: Specify a category that the news belogs to.
* *date*: Date of the news.
* *tag1*: To insert tag.
* *tag2*: To insert second tag.
* *author*: Author of the news.
* *show*: Takes a boolean value. Set to false if you don’t want a specific news to show up when the site is generated.