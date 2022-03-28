class ChangeReviewsTable < ActiveRecord::Migration[5.2]
  def change
    remove_index :reviews, :product_id
    remove_index :reviews, :user_id
    rename_column :reviews, :user_id, :user_id
    rename_column :reviews, :product_id, :productId
    add_index :reviews, :productId
    add_index :reviews, :userId
  end
end
