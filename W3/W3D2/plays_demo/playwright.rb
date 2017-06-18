class Playwright

  attr_reader :name, :id, :birth_year

  def initialize(options)
    @name = options[:name]
    @id = options[:id]
    @birth_year = options[:birth_year]
  end

  def self.all
    data = PlayDBConnection.instance.execute("SELECT * FROM Playwrights")
    data.map {|datum| Playwright.new(datum)}
  end

  def find_by_name(name)

    name = PlayDBConnection.instance.execute(<<-SQL, name)
      SELECT
        *
      FROM
        playwrights
      WHERE
        playwrights.name = ?
    SQL

    return nil unless name.length > 0

    Playwright.map {|playwright| Playwright.new(playwright)}
  end

  def create
    raise "#{self} already in databse" if @id
    PlayDBConnection.instance.execute(<<-SQL, @name, @birth_year)
      INSERT INTO
        playwrights (name, birth_year)
      VALUES
        (?, ?)
    SQL

    @id = PlayDBConnection.instance.last_insert_row_id
  end

  def update
    raise "#{self} not in database" unless @id
    PlayDBConnection.instance.execute(<<-SQL, @name, @birth_year)
      UPDATE
        playwrights
      SET
        name = ?, birth_year = ?
      WHERE
        id = ?
    SQL
  end

  def get_plays
    raise "#{self} not in database" unless @id
    plays = PlayDBConnection.instance.execute(<<-SQL, @id)
      SELECT
        *
      FROM
        plays
      WHERE
        playwright_id = ?
    SQL

    plays.map { |play| Play.new(play) }
  end

end
