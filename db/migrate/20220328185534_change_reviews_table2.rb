class ChangeReviewsTable2 < ActiveRecord::Migration[5.2]
  def change
    rename_column :reviews, :user_id, :user_id
  end
end
