const personal_item = `<div data-testid="candidate_inbox_profile_card_item" class="_0a04ae personal-row">
<div data-testid="candidate_inbox_profile_card_item_left"
    class="_397a3f"><span class="el-tooltip ff5afa"
    aria-describedby="el-tooltip-8165" tabindex="0">
    <div class="_52dc0d"><i class="icon icon-group"></i></div>
    <div data-testid="candidate_inbox_profile_card_item_left_value"
        class="_851c79">
        <div class="_4e00e6 _646177">
        <div aria-hidden="true" class="">[info]</div>
        <p class="_9ee644"><!----> <span
            class="ol-text-message ae8f46"></span></p>
        </div>
    </div> <!----> <!---->
    </span></div>
    
</div>`;

const append_personal_information = `<div data-testid="candidate_inbox_profile_card_item_right"
        class="_835a90"><span class="el-tooltip ff5afa"
        aria-describedby="el-tooltip-720" tabindex="0">
        <div class="_52dc0d"><i class="icon icon-location"></i></div>
        <div data-testid="candidate_inbox_profile_card_item_right_value"
            class="_851c79">
            <div class="_4e00e6 _646177">
            <div aria-hidden="true" class="">[info]</div>
            <p class="_9ee644"><!----> <span
                class="ol-text-message ae8f46"></span></p>
            </div>
        </div> <!----> <!---->
        </span></div>`;

(function(){
    home_section = document.querySelector("#home-section")
    interview_section = document.querySelector("#interview-section")
    file_name_ele = document.querySelector("#file-name")
    file_input_ele = document.querySelector("#file-input")
    bth_start_interview = document.querySelector("#btn-start-interview")
    personal_information = document.querySelector("#personal-information-group")
    preview_cv = document.querySelector("#preview-cv")
    // job_title = document.querySelector("#job-title")
    job_desc = document.querySelector("#job-desc")
    company_info = document.querySelector("#company-info")
    btn_save_job = document.querySelector("#btn-save-job")
    btn_ai_interview = document.querySelector("#btn-ai-interview")
    experience_question = document.querySelector("#experience-question-group")
    culture_question = document.querySelector("#culture-question")
    last_tech_board = null;

    resume_text = ""
    job_information = {}

    file_input_ele.addEventListener("change", async function(element){
        // Get file name
        const file_name = element.target.files[0].name
        file_name_ele.innerHTML = file_name
        preview_cv.src = URL.createObjectURL(element.target.files[0])
        await parser_pdf_file(element.target.files[0])
    })

    bth_start_interview.addEventListener("click", function(){
        home_section.style.display = "none"
        interview_section.style.display = "block"
    })

    btn_save_job.addEventListener("click", function(){
        job_information = get_job_information()
        console.log(job_information)
    })
    
    btn_ai_interview.addEventListener("click", async function(){
        if (Object.keys(job_information).length == 0 || file_input_ele.files.length == 0){
            toastr.error("Please config your job and cv first")
            return
        }
        extract_personal_information();
        gen_technical_question();
        gen_culture_question();
    })

    function add_personal_information(text){
        let arr = document.querySelectorAll(".personal-row")
        if (arr.length == 0 || arr[arr.length - 1].childElementCount == 2){
            personal_information.insertAdjacentHTML('beforeend', personal_item.replace("[info]", text));
            return
        }
        arr = document.querySelectorAll(".personal-row")
        arr[arr.length - 1].insertAdjacentHTML('beforeend', append_personal_information.replace("[info]", text));
    }

    function trimNumberDot(text) {
        return text.replace(/^\d+\.\s*/, '');
    }

    async function parser_pdf_file(file){
        $.LoadingOverlay("show");
        const formData = new FormData();
        formData.append('file', file);
        formData.append('key', "438a4129-b2e0-4ba1-a562-628408a278fa");

        axios.post('https://selectpdf.com/api2/pdftotext/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            resume_text = response.data; // Handle successful upload response
            console.log(response.data)
        })
        .catch(error => {
            console.error(error); // Handle upload errors
        }).finally(() => {
            $.LoadingOverlay("hide");
        });
    }

    function get_job_information(){
        return {
            // job_title: job_title.value,
            job_desc: job_desc.value,
            company_info: company_info.value
        }
    }

    function isDigit(char) {
        return /^\d$/.test(char);
    }

    async function extract_personal_information(){
        $("#personal-information-group").LoadingOverlay("show")
        data = {
            "inputs": {
                "cv_raw_text": resume_text,
                "task": "Personal"
            },
            "response_mode": "blocking",
            "user": "streaming"
        }
        axios.post("https://llmdify-regional-dev-use1.paradox.sdm.network/v1/workflows/run", data, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer app-wpjmFPYX9Tfn8Jt5O0D3PEyu"
            }
        }).then(response => {
            console.log(response)
            personal_information.innerHTML = response.data.data.outputs.text.replaceAll("\n", "<br>")
        }).catch(error => {
            toastr.error("Fail to extract personal information")
            console.log(error)
        }).finally(() => {
            $("#personal-information-group").LoadingOverlay("hide")
        })

        
        // let last_word = ""
        // const reader = response.body.getReader();

        // while (true) {
            
        //     const { done, value } = await reader.read();
            
        //     if (done) break;
            
        //     text = new TextDecoder().decode(value);
        //     console.log(">> " + text)
        //     if (text.indexOf("\ndata") != -1) continue;
        //     const jsonString = text.replace(/^data:\s*/, '').trim();
        //     let jsonObject = {}
        //     try{
        //         jsonObject = JSON.parse(jsonString);
        //     } catch (e){
        //         console.log("Fail to parse json")
        //         console.log(jsonString)
        //         continue;
        //     }
            
        //     if (jsonObject.event == "node_finished") break;
        //     text = jsonObject.data.text
        //     if (text == undefined) continue;

        //     if (text == "." && isDigit(last_word)){
        //         personal_information.insertAdjacentHTML("beforeEnd", "<br>");
        //     }
        //     personal_information.insertAdjacentHTML("beforeEnd", last_word);
        //     last_word = text
        // }
    }

    async function gen_technical_question(){
        $("#experience-question-group").LoadingOverlay("show")
        data = {
            "inputs": {
                "resume_insight": resume_text,
                "task": "Experience",
                "jd": job_information.job_desc,
                "company_description": job_information.company_info,
            },
            "response_mode": "blocking",
            "user": "tuongnh"
        }
        experience_question.innerHTML = ""
        axios.post("https://llmdify-regional-dev-use1.paradox.sdm.network/v1/workflows/run", data, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer app-twz6gJF2AMn8OuqFOim0cmAH"
            }
        }).then(response => {
            console.log(response)
            text = response.data.data.outputs.text.split("\n\n")
            text.forEach(element => {
                try{
                    arr = element.split("\n")
                    exp = arr[0].replace(/^\d+\.\s*/gm, '')
                    exp = exp.replace("Experience:", '')
                    question = arr[1].replace("=>", '')
                    question = question.replace("Question:", '')
                    append_technical_question(exp, question)
                } catch (e){
                    console.log(e)
                    console.log(element)
                }
                
            })
        }).catch(error => {
            toastr.error("Fail to generate technical question")
            console.log(error)
        }).finally(() => {
            $("#experience-question-group").LoadingOverlay("hide")
        })

        
        
    }

    async function gen_culture_question(){
        $("#culture-question").LoadingOverlay("show")
        data = {
            "inputs": {
                "resume_insight": resume_text,
                "task": "Culture fit",
                "jd": job_information.job_desc,
                "company_description": job_information.company_info,
            },
            "response_mode": "blocking",
            "user": "tuongnh"
        }
        culture_question.innerHTML = ""
        axios.post("https://llmdify-regional-dev-use1.paradox.sdm.network/v1/workflows/run", data, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer app-twz6gJF2AMn8OuqFOim0cmAH"
            }
        }).then(response => {
            text = response.data.data.outputs.text.split("\n")
            text.forEach(element => {
                if (element){
                    append_culture_question(element)
                }
            })
        }).catch(error => {
            toastr.error("Fail to generate culture question")
            console.log(error)
        }).finally(() => {
            $("#culture-question").LoadingOverlay("hide")
        })
    }

    async function append_technical_question(content, question){
        experience_question.insertAdjacentHTML("beforeend", `<div class="col-4">
            <div class="card border-info mb-3" style="max-width: 18rem;">
                <div class="card-header">Interview question</div>
                <div class="card-body">
                <p class="card-title tech-insight text-success font-weight-bold"><i class="fa-solid fa-receipt"></i>${content}</p>
                <p class="card-text tech-question"><i class="fa-regular fa-circle-question"></i>${question}</p>
                </div>
                <div class="card-footer text-right">
                <button class="btn btn-danger btn-sm" onclick="bug_report()" type="button">
                    <i class="fa-solid fa-bug"></i>
                </button>
                <button class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#note-modal" type="button">
                    Note
                </button>
                </div>
            </div>
        </div>`)
    }

    async function append_culture_question(question){
        culture_question.insertAdjacentHTML("beforeend", `<div class="col-4">
            <div class="card border-info mb-3" style="max-width: 18rem;">
                <div class="card-header">Interview question</div>
                <div class="card-body">
                <p class="card-text">${question}</p>
                </div>
                <div class="card-footer text-right">
                <button class="btn btn-danger btn-sm " type="button">
                    <i class="fa-solid fa-bug"></i>
                </button>
                <button class="btn btn-info btn-sm " type="button">
                    Note
                </button>
                </div>
            </div>
        </div>`)
    }
    // setInterval(() => {
    //     append_technical_question("What is your name?", true, true);
    //     append_technical_question("Ask aboout name", false, false);
    // }, 1000);

    // setInterval(add_personal_information, 1000)

})()

function bug_report(){
    toastr.info("Thank you for your feedback")
}