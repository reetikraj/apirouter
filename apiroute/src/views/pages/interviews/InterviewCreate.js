let InterviewCreate = {
    render: async () => {
        let view = /*html*/`
        <form class="simple_form new_interview" id="new_interview" novalidate="novalidate" enctype="multipart/form-data" accept-charset="UTF-8" method="post">
            <h3>Interviewer Details</h3>      
            <p>
                <label class="string required" for="interview_interviews_users_attributes_0_users_Name"><abbr title="required">*</abbr> Name</label>
                <input type="text" name="interview[interviews_users_attributes][0][users][name]" id="interview_interviews_users_attributes_0_users_name">
                <label class="string required" for="interview_interviews_users_attributes_0_users_Email"><abbr title="required">*</abbr> Email</label>
                <input type="text" name="interview[interviews_users_attributes][0][users][email]" id="interview_interviews_users_attributes_0_users_email">
            </p>
            <h3>Candidate Details</h3>
            <p>
                <label class="string required" for="interview_interviews_users_attributes_1_users_Name"><abbr title="required">*</abbr> Name</label>
                <input type="text" name="interview[interviews_users_attributes][1][users][name]" id="interview_interviews_users_attributes_1_users_name">
                <label class="string required" for="interview_interviews_users_attributes_1_users_Email"><abbr title="required">*</abbr> Email</label>
                <input type="text" name="interview[interviews_users_attributes][1][users][email]" id="interview_interviews_users_attributes_1_users_email">
                <label class="string required" for="interview_interviews_users_attributes_1_users_resume"><abbr title="required">*</abbr> Resume</label>
                <input type="file" name="interview[interviews_users_attributes][1][users][resume]" id="interview_interviews_users_attributes_1_users_resume">
            </p>
            <h3>Interview Details</h3>
            <p>
                <label class="string optional" for="interview_Date">Date</label>
                <input type="date" name="interview[interview_date]" id="interview_interview_date">
                <label class="time required" for="interview_start_time"><abbr title="required">*</abbr> Start time</label>
                <input type="time" name="interview[start_time]" id="interview_start_time">
                <label class="time required" for="interview_end_time"><abbr title="required">*</abbr> End time</label>
                <input type="time" name="interview[end_time]" id="interview_end_time">
            </p>
            <div class="actions" id="create_button">
                <input type="submit" name="commit" value="Create Interview" data-disable-with="Create Interview">
            </div>
        </form>
        `
        return view
    },
    after_render: async () => {
        const myForm = document.getElementById("new_interview");

        myForm.addEventListener('submit', async function(e) {
            const formData = new FormData(this);

            const options = {
                method: 'POST',
                body: formData,
                accept: 'application/json',
                headers: {
                    'Access-Control-Allow-Methods': 'GET, POST',
                    'access-control-allow-origin' : '*'
                }
            };
            try {
                console.log("yha tak1")
                const response = await fetch ('http://localhost:3000/api/v1/interviews', options)
                console.log("chal gya")
                return response
            } catch(err) {
                console.log("pakka nhi chala")
                console.log(formData, err)
                console.log("nahichala")
                window.location.replace("http://127.0.0.1:8080/#/interviews");
            }
        });
    }
}

export default InterviewCreate;