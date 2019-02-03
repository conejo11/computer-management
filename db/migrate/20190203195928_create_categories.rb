class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :PC_NAME
      t.integer :PC_CPU
      t.integer :PC_GPU
      t.integer :PC_RAM
      t.integer :PC_DISC
      t.integer :PC_AREA
      t.timestamps
    end
  end
end
