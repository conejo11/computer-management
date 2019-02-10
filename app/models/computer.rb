class Computer < ApplicationRecord
  def category
    # Note that we need to keep this order because if we had CPU = 8, both 8 >= 8 and 8 > 4 are true

    return :design_3d if for_3d?
    return :animation if for_animation?
    return :design if for_design?
    return :development if for_development?
    return :administration if for_administration?
    :other
  end

  def list_information
    data = self.attributes
    data[:category] = category.to_s.humanize

    data
  end

  private

  def for_administration?
    cpu >= 1 and
        gpu >= 0 and
        ram >= 4 and
        disk >= 120
  end

  def for_development?
    cpu >= 4 and
        gpu >= 0 and
        ram >= 8 and
        disk >= 120
  end

  def for_design?
    cpu >= 6 and
        gpu >= 1 and
        ram >= 8 and
        disk >= 240
  end

  def for_animation?
    cpu >= 8 and
        gpu >= 2 and
        ram >= 16 and
        disk >= 240
  end

  def for_3d?
    cpu >= 16 and
        gpu >= 3 and
        ram >= 32 and
        disk >= 480
  end
end
