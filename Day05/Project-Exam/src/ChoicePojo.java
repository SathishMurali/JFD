public class ChoicePojo {
    private int id;

    public ChoicePojo(int id, String choice) {
        this.id = id;
        this.choice = choice;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getChoice() {
        return choice;
    }

    public void setChoice(String choice) {
        this.choice = choice;
    }

    private String choice;
}