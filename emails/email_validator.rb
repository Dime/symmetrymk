class EmailValidator
  class << self
    def validate(params)
      puts params.inspect
      if params['favourite_movie'].blank?
        params.delete('favourite_movie')
        ! params.values.any?{|item| item.blank? }
      else
        false
      end
    end
  end
end

