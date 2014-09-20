class EmailSender
  class << self
    def deliver_hire_email(params)
      full_name = params["full_name"]
      email = params["email"]
      phone = params["phone"]
      description = params["description"]
      budget = params["budget"]

      mail_body = %Q(
      Hey!

      We got contacted by #{full_name}.
      They'd describe their project as:
      #{description}

      Their budget is #{budget}.
      You can contact them by phone on #{phone}.
      Or by email on #{email}.

      Cheers!)

      log_mail(email, mail_body)

      Mail.deliver do
        from "#{email}"
        to ENV['HIRE_EMAIL'] || 'dime@pashoski.com'
        subject "Someone wants to hire us!"
        body mail_body
      end
    end

    def log_mail(email, mail_body)
      puts "Sending mail..."
      puts " from #{email}"
      puts " to dime@pashoski.com"
      puts " body #{mail_body}"
    end

    def deliver_job_application(params)
      full_name = params["full_name"]
      email = params["email"]
      description = params["description"]
      portfolio_url = params["portfolio"]
      position = params['position']

      mail_body = %Q(
      Hey!

      #{full_name} just sent us a job application for
      the #{position} position.

      The applicatnt would describe himself as:
      #{description}

      You can see his work here: #{portfolio_url}

      You can contact him by email on #{email}.

      Cheers!)

      log_mail(email, mail_body)

      Mail.deliver do
        from "#{email}"
        to ENV['JOBS_EMAIL'] || 'dime@pashoski.com'
        subject "Job application by: #{full_name}"
        body mail_body
      end
    end

    def deliver_intern_application(params)
      full_name = params["full_name"]
      email = params["email"]
      description = params["description"]
      portfolio_url = params["portfolio"]
      cv_filename = params["file"][:filename]

      mail_body = %Q(
      Hey!

      #{full_name} just sent us a internship application.

      The applicatnt would describe himself as:
      #{description}

      You can see his work here: #{portfolio_url}

      You can contact him by email on #{email}.

      His/her CV is attached to this email.

      Cheers!)

      log_mail(email, mail_body)
      Mail.deliver do
        from "#{email}"
        to ENV['JOBS_EMAIL'] || 'dime@pashoski.com'
        subject "Internship application by: #{full_name}"
        body mail_body
        add_file filename: cv_filename, content: File.open(params["file"][:tempfile]).read
      end
    end

  end
end
