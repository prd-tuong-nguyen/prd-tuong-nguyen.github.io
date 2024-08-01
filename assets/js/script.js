(function (){
    const project_ele = document.querySelector("#projects")
    project_data.forEach(project => {
        tag = project.tags.map(tag => `<span class="badge rounded-pill bg-success">${tag}</span>`).join(' ')
        project_ele.insertAdjacentHTML('beforeend', `
        <div class="col-lg-4 col-md-8 col-sm-10">
            <div class="single-feature">
                <div class="icon">
                    <img width="100%" src="${project.icon}" alt="" srcset="">
                </div>
                <div class="content">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <p>${tag}</p>
                </div>
            </div>
            <div class="text-center">
                <a target="_blank" href="${project.detail}" type="button" class="btn btn-info">Read more</a>
                <a href="${project.link}" type="button" class="btn btn-outline-warning">Demo</a>
            </div>
        </div>    
        `)
    })
    
})()